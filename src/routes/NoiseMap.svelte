<script lang="ts">
	import { onMount } from 'svelte';
	let canvasRef: HTMLCanvasElement;

	onMount(() => {
		if (canvasRef) {
			const ctx = canvasRef.getContext('2d');
			if (ctx) {
				ctx.fillStyle = 'lightblue';
				console.log('canvasRef.width, canvasRef.height: ', canvasRef.width, ', ', canvasRef.height);
				ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);
			}
		}
	});
</script>

<div class="flex-grow p-3 overflow-hidden" style="width: 100%; height: 100%;">
	<canvas bind:this={canvasRef} width="500" height="300" style="width: 100%; height: 100%;"
	></canvas>
</div>

<style>
</style>
