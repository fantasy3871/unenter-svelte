<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { defineHex, Grid, Hex, Orientation, rectangle } from 'honeycomb-grid';
	import { Application, Container, Graphics } from 'pixi.js';
	import type { TerrainLayer } from '../types/noise-map';
	import { TILE } from '../constants/noise-map';
	import {
		applyShadeAndFindMidpoint,
		createNoiseFunction,
		drawHex,
		getColor,
		getNoiseShade,
		getShade
	} from '../utils/noise-map';
	import { noiseMapData } from '../stores/noise-map';

	let terrainSeed: string;
	let tileSize: number;
	let frequency: number;
	let lacunarity: number;
	let octaves: number;
	let persistence: number;
	let orientation: string;
	let scale: number;
	let tileStyle: string;
	let terrainLayers: TerrainLayer[];
	let canvasRef: HTMLCanvasElement;
	let app: Application;
	let gridRef: Grid<Hex>;
	const graphics = new Graphics();
	const stageContainer = new Container();
	let Tile: ReturnType<typeof defineHex>;

	noiseMapData.subscribe((value) => {
		terrainSeed = value.worldData.terrainSeed;
		tileSize = value.tileSize;
		frequency = value.frequency;
		lacunarity = value.lacunarity;
		octaves = value.octaves;
		persistence = value.persistence;
		orientation = value.worldData.orientation;
		scale = value.scale;
		tileStyle = value.tileStyle;
		terrainLayers = value.terrainLayers;
	});

	const resizeCanvas = () => {
		if (canvasRef) {
			const parent = canvasRef.parentElement;
			if (parent) {
				canvasRef.width = parent.clientWidth;
				canvasRef.height = parent.clientHeight;
			}
		}
	};
	onMount(() => {
		window.addEventListener('resize', resizeCanvas);

		onDestroy(() => {
			window.removeEventListener('resize', resizeCanvas);
			app?.destroy(true); // Clean up Pixi.js when component is destroyed
		});
	});

	// Reactive to update map generation on change of certain variables
	$: {
		if (canvasRef) {
			resizeCanvas();
			Tile = defineHex({
				dimensions: tileSize,
				origin: 'topLeft',
				orientation: Orientation.POINTY
			});

			app = new Application();
			app.init({
				canvas: canvasRef, // Attach the canvas
				antialias: true,
				backgroundColor: 0x242120,
				resizeTo: canvasRef?.parentElement ?? undefined
			});

			const mapNoise2D = createNoiseFunction(terrainSeed, {
				amplitude: 1,
				frequency,
				lacunarity,
				octaves,
				persistence
			});
			const generateMap = () => {
				graphics.clear();
				const tile = new Tile();

				let width, height;
				if (orientation === Orientation.POINTY) {
					width = Math.floor(canvasRef.clientWidth / tile.width);
					height = Math.floor(canvasRef.clientHeight / ((3 / 4) * tile.height));
				} else {
					width = Math.floor(canvasRef.clientWidth / ((3 / 4) * tile.width));
					height = Math.floor(canvasRef.clientHeight / tile.height);
				}

				gridRef = new Grid(Tile, rectangle({ width, height }));

				gridRef.forEach((hex) => {
					const elevation = mapNoise2D(hex.x / scale, hex.y / scale);
					let fillColor;

					switch (tileStyle) {
						case TILE.STYLES.FLAT:
							fillColor = getColor(elevation, terrainLayers);
							break;
						case TILE.STYLES.NOISE:
							fillColor = getNoiseShade(elevation);
							break;
						case TILE.STYLES.TERRAIN:
							fillColor = applyShadeAndFindMidpoint(
								getColor(elevation, terrainLayers),
								getShade(elevation)
							);
							break;
						default:
							fillColor = '#474544';
					}

					drawHex(hex, graphics, { fillColor });
				});
			};
			generateMap();
			stageContainer.addChild(graphics);
			app.stage.addChild(stageContainer);
		}
	}
</script>

<!-- Svelte Template -->
<div class="map-container">
	<canvas bind:this={canvasRef}></canvas>
</div>

<style>
	.map-container {
		flex-grow: 1;
		margin: 1rem;
		overflow: hidden;
	}

	canvas {
		width: 100%;
		height: 100%;
	}
</style>
