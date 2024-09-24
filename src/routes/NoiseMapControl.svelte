<script>
	let name = 'world';
</script>

<div>
	<div class="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="terrainSeed">
				Terrain Seed
			</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="terrainSeed"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="scale"> Scale </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="scale"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="style"> Style </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="style"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="frequency"> Frequency </label>
			<input
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
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="lacunarity"
				type="text"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="octaves"> octaves </label>
			<input
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
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="persistence"
				type="text"
			/>
		</div>
	</div>
</div>
