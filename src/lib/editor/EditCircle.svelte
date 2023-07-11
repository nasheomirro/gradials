<script lang="ts">
	import type { Circle } from '$lib/app/types';
	import EditColor from './EditColorPallete.svelte';
	import EditColorButtons from './EditColorButtons.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import Input from '$lib/components/Input.svelte';

	import { store } from '$lib/app/store';
	import Button from '$lib/components/Button.svelte';
	import ArrowDown from '$lib/components/icons/ArrowDown.svelte';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';

	export let circle: Circle;
	let activeColor: number = 0;
</script>

<li
	class="border relative shadow bg-surface-100 border-surface-400 p-3 md:p-4 rounded flex flex-col sm:flex-row gap-2 sm:gap-10"
>
	<Button
		on:click={() => store.remove(circle.id)}
		class="w-5 p-0 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 aspect-square rounded-full font-bold"
	>
		<span class="sr-only">remove gradient</span>
		<Close /></Button
	>
	<div class="absolute top-0 left-0 pl-2 flex gap-2 -translate-y-1/2">
		<Button
			on:click={() => store.move(circle.id, -1)}
			class="w-5 p-1 aspect-square rounded-full font-bold"
		>
			<span class="sr-only">move gradient up</span>
			<ArrowUp /></Button
		>
		<Button
			on:click={() => store.move(circle.id, 1)}
			class="w-5 p-1 aspect-square rounded-full font-bold"
		>
			<span class="sr-only">move gradient down</span>
			<ArrowDown /></Button
		>
	</div>

	<div class="w-full flex flex-col sm:w-1/3">
		<div class="mb-4 grid grid-cols-2 gap-x-4 gap-y-0.5 items-center">
			<span class="font-bold text-surface-400 opacity-60">X</span>
			<span class="font-bold text-surface-400 opacity-60">Y</span>
			<Input type="number" class="w-full text-center" bind:value={circle.position.x} />
			<Input type="number" class="w-full text-center" bind:value={circle.position.y} />
		</div>

		<EditColorButtons bind:circle bind:activeColor />
	</div>

	{#key activeColor}
		<div class="sm:w-2/3">
			<EditColor bind:color={circle.colors[activeColor]} />
		</div>
	{/key}
</li>
