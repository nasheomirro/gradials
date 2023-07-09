<script lang="ts">
	import type { Circle } from '$lib/app/types';
	import EditColor from './EditColorPallete.svelte';
	import EditColorButtons from './EditColorButtons.svelte';
	import { store } from '$lib/app/store';
	import Close from '$lib/components/icons/Close.svelte';
	import Input from '$lib/components/Input.svelte';

	export let circle: Circle;
	let activeColor: number = 0;
</script>

<li
	class="border relative shadow bg-surface-100 border-surface-400 p-3 md:p-4 rounded flex flex-col sm:flex-row gap-2 sm:gap-10"
>
	<div class="w-full flex flex-col sm:w-1/3">
		<div class="mb-4 grid grid-cols-2 gap-x-4 gap-y-0.5 items-center">
			<span class="font-bold text-surface-400 opacity-60">X</span>
			<span class="font-bold text-surface-400 opacity-60">Y</span>
			<Input tw="w-full text-center" bind:value={circle.position.x} />
			<Input tw="w-full text-center" bind:value={circle.position.y} />
		</div>

		<EditColorButtons bind:circle bind:activeColor />
		<div>
			<button
				on:click={() => store.remove(circle.id)}
				class="w-5 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-surface-100 hover:bg-error-500 border hover:bg-red-300 transition-colors aspect-square rounded-full font-bold"
				><Close /></button
			>
		</div>
	</div>

	{#key activeColor}
		<div class="sm:w-2/3">
			<EditColor bind:color={circle.colors[activeColor]} />
		</div>
	{/key}
</li>
