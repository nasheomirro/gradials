<script lang="ts">
	import { store } from '$lib/app/store';
	import EditCircle from './EditCircle.svelte';
</script>

<ul class="flex flex-col mt-4 mb-4 gap-4">
	{#each $store as circle (circle.id)}
		<EditCircle bind:circle />
	{/each}
</ul>

<button on:click={store.add} class="w-full p-3 border border-surface-400">Add Circle</button>
