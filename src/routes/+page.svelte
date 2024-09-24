<script lang="ts">
	import NoiseMap from './NoiseMap.svelte';
	import NoiseMapControl from './NoiseMapControl.svelte';
</script>

<div class="flex flex-col h-screen min-w-96">
	<NoiseMap />
	<div class="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
		<NoiseMapControl />
	</div>
</div>

<style>
</style>
