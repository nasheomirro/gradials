<script lang="ts">
	import type { Circle } from '$lib/app/types';
	import EditColor from './EditColorPallete.svelte';
	import EditColorButtons from './EditColorButtons.svelte';
	import { store } from '$lib/app/store';

	export let circle: Circle;
	let activeColor: number = 0;
</script>

<li class="border p-3 rounded grid grid-cols-1 md:grid-cols-3 gap-4">
	<div class="w-full flex flex-col">
		<div class="mb-3">
			<button
				on:click={() => store.remove(circle.id)}
				class="p-2 w-full bg-red-200 border hover:bg-red-300 transition-colors rounded font-bold"
				>remove</button
			>
		</div>
		<div class="mb-4 flex items-center">
			<label class="pr-3 font-bold text-gray-400 text-center" for="{circle.id}-pos">Position:</label
			>
			<input
				class="w-full border p-1 text-center"
				id="${circle.id}-pos"
				bind:value={circle.position}
			/>
		</div>
		<EditColorButtons bind:circle bind:activeColor />
	</div>

	{#key activeColor}
		<div class="md:col-span-2">
			<EditColor bind:color={circle.colors[activeColor]} />
		</div>
	{/key}
</li>
