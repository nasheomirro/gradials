<script lang="ts">
	import { radials } from '../radials';
	import Button from '$lib/components/Button.svelte';
	import EditRadial from './EditRadial.svelte';
</script>

<ul class="flex flex-col mt-4 mb-4 gap-4">
	{#each $radials as radial (radial.id)}
		<EditRadial bind:radial={radial} />
	{/each}
</ul>

<Button class="w-full p-2" on:click={radials.add}
	><span class="font-bold">Create Radial Gradient</span></Button
>
