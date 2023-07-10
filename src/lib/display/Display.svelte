<script lang="ts">
	import { store } from '$lib/app/store';
	import PositionPicker from '$lib/picker/PositionPicker.svelte';
	export let style: string | undefined;

	let hidePoints = false;
</script>

<div>
	<div class="flex justify-end mb-2">
		<button
			on:click={() => (hidePoints = !hidePoints)}
			class="text-sm px-2.5 font-semibold outline-surface-600 transition-colors hover:bg-primary-200 p-0.5 rounded bg-primary-100 border-surface-400 border">toggle</button
		>
	</div>
	<div class="alpha-bg relative rounded-lg shadow border border-surface-400">
		<div {style} class="w-full h-60 md:h-96 rounded-lg" />
		<div class:hidden={hidePoints}>
			{#each $store as circle (circle.id)}
				<PositionPicker position={circle.position} />
			{/each}
		</div>
	</div>
</div>

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
