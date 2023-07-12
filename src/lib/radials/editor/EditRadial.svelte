<script lang="ts">
	import type { Radial } from '$lib/types';
	import { radials } from '../radials';
	import EditColor from './EditColorPallete.svelte';
	import EditColorButtons from './EditColorButtons.svelte';
	import EditPosition from './EditPosition.svelte';

	import Close from '$lib/components/icons/Close.svelte';
	import Button from '$lib/components/Button.svelte';
	import ArrowDown from '$lib/components/icons/ArrowDown.svelte';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';

	export let radial: Radial;
	let activeColor: number = 0;
</script>

<li
	class="border relative shadow bg-surface-100 border-surface-400 py-6 px-3 md:p-4 rounded flex flex-col sm:flex-row gap-2 sm:gap-10"
>
	<Button
		on:click={() => radials.remove(radial.id)}
		class="w-5 p-0 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 aspect-square rounded-full font-bold"
	>
		<span class="sr-only">remove gradient</span>
		<Close /></Button
	>
	<div class="absolute top-0 left-0 pl-2 flex gap-2 -translate-y-1/2">
		<Button
			on:click={() => radials.move(radial.id, -1)}
			class="w-5 p-1 aspect-square rounded-full font-bold"
		>
			<span class="sr-only">move gradient up</span>
			<ArrowUp /></Button
		>
		<Button
			on:click={() => radials.move(radial.id, 1)}
			class="w-5 p-1 aspect-square rounded-full font-bold"
		>
			<span class="sr-only">move gradient down</span>
			<ArrowDown /></Button
		>
	</div>

	<div class="w-full flex flex-col sm:w-1/3">
		<EditPosition bind:radial />
		<EditColorButtons bind:radial bind:activeColor />
	</div>

	{#key activeColor}
		<div class="sm:w-2/3">
			<EditColor bind:color={radial.colors[activeColor]} />
		</div>
	{/key}
</li>
