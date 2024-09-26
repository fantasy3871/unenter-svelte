<script lang="ts">
	import { noiseMapData } from '../stores/noise-map';
	import { TILE } from '../constants/noise-map';
	import { get } from 'svelte/store';

	let terrainSeed: string;
	let scale: number;
	let tileStyle: string;
	let frequency: number;
	let lacunarity: number;
	let octaves: number;
	let persistence: number;

	noiseMapData.subscribe((value) => {
		terrainSeed = value.worldData.terrainSeed;
		scale = value.scale;
		tileStyle = value.tileStyle;
		frequency = value.frequency;
		lacunarity = value.lacunarity;
		octaves = value.octaves;
		persistence = value.persistence;
	});

	function updateTerrainSeed(event: Event) {
		const newSeed = (event.target as HTMLInputElement).value;
		noiseMapData.update((data) => {
			return {
				...data,
				worldData: {
					...data.worldData,
					terrainSeed: newSeed
				}
			};
		});
	}

	function updateNoiseMapData(event: Event) {
		const field = (event.target as HTMLInputElement).id;
		const newValue = (event.target as HTMLInputElement).value;
		noiseMapData.update((data) => {
			return {
				...data,
				[field]: newValue
			};
		});
	}
</script>

<div>
	<div class="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="terrainSeed">
				Terrain Seed
			</label>
			<input
				bind:value={terrainSeed}
				on:change={updateTerrainSeed}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="terrainSeed"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="scale"> Scale </label>
			<input
				bind:value={scale}
				on:change={updateNoiseMapData}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="scale"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="style"> Style </label>
			<select
				bind:value={tileStyle}
				on:change={updateNoiseMapData}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="tileStyle"
			>
				{#each Object.values(TILE.STYLES) as style}
					<option value={style}>{style}</option> <!-- Display the style value -->
				{/each}
			</select>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="frequency"> Frequency </label>
			<input
				bind:value={frequency}
				on:change={updateNoiseMapData}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="frequency"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="lacunarity">
				Lacunarity
			</label>
			<input
				bind:value={lacunarity}
				on:change={updateNoiseMapData}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="lacunarity"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="octaves"> octaves </label>
			<input
				bind:value={octaves}
				on:change={updateNoiseMapData}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="octaves"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="persistence">
				Persistence
			</label>
			<input
				bind:value={persistence}
				on:change={updateNoiseMapData}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="persistence"
				type="text"
			/>
		</div>
	</div>
</div>
