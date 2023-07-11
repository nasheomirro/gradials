<script lang="ts">
	import { store } from '$lib/app/store';
	import Button from '$lib/components/Button.svelte';
	import CopyBlock from './CopyBlock.svelte';
	import PositionPicker from './PositionPicker.svelte';

	export let style: string;

	let hidePoints = false;
	let display: HTMLDivElement;
</script>

<div class="flex justify-end mb-2">
	<Button on:click={() => (hidePoints = !hidePoints)} class="w-auto px-1.5 py-1 text-xs"
		>toggle</Button
	>
</div>

<div bind:this={display} class="alpha-bg relative rounded-lg mb-2 shadow border border-surface-400">
	<div style={`background-image: ${style}`} class="w-full h-60 md:h-96 rounded-lg" />
	<div class:hidden={hidePoints}>
		{#each $store as circle (circle.id)}
			<PositionPicker {display} bind:position={circle.position} />
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
			linear-gradient(-45deg, transparent 75%, #ccca 75%);
		background-size: 32px 32px;
		background-position: 0 0, 0 16px, 16px -16px, -16px 0px;
	}
</style>
