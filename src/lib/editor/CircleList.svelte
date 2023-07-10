<script lang="ts">
	import { store } from '$lib/app/store';
	import Button from '$lib/components/Button.svelte';
	import EditCircle from './EditCircle.svelte';
</script>

<ul class="flex flex-col mt-4 mb-4 gap-4">
	{#each $store as circle (circle.id)}
		<EditCircle bind:circle />
	{/each}
</ul>

<Button class="w-full p-2" on:click={store.add}
	><span class="font-bold">Create Radial Gradient</span></Button
>
