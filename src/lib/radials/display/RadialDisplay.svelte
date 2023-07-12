<script lang="ts">
	import { radials } from '$lib/radials/radials';
	import Button from '$lib/components/Button.svelte';
	import { twJoin } from 'tailwind-merge';
	import CopyBlock from './CopyBlock.svelte';
	import PositionPicker from './PositionPicker.svelte';

	export let style: string;

	let hidePoints = false;
	let isLocked = true;
	let display: HTMLDivElement;
</script>

<div class="flex justify-end mb-2 gap-2">
	<Button on:click={() => (isLocked = !isLocked)} class="w-auto px-1.5 py-1 text-xs font-bold"
		>{isLocked ? 'unlock' : 'lock'}</Button
	>
	<Button on:click={() => (hidePoints = !hidePoints)} class="w-auto px-1.5 py-1 text-xs font-bold"
		>toggle</Button
	>
</div>

<div
	bind:this={display}
	class={twJoin(
		'alpha-bg z-10 rounded-lg mb-2 shadow border border-surface-400',
		!isLocked ? 'sticky top-0' : 'relative'
	)}
>
	<div style={`background-image: ${style}`} class="w-full h-60 md:h-96 rounded-lg" />
	<div class:hidden={hidePoints}>
		{#each $radials as radial (radial.id)}
			<PositionPicker {display} bind:position={radial.position} />
		{/each}
	</div>
</div>

<CopyBlock {style} />

<style>
	/* responsible for the alpha effect */
	.alpha-bg {
		background-image: linear-gradient(45deg, #ccca 25%, transparent 25%),
			linear-gradient(-45deg, #ccca 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #ccca 75%),
			linear-gradient(-45deg, transparent 75%, #ccca 75%),
			linear-gradient(-45deg, transparent 25%, #fff 25%),
			linear-gradient(45deg, transparent 25%, #fff 25%),
			linear-gradient(-45deg, #fff 75%, transparent 75%),
			linear-gradient(45deg, #fff 75%, transparent 75%);
		background-size: 32px 32px;
		background-position: 0 0, 0 16px, 16px -16px, -16px 0px;
	}
</style>
