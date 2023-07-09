<script lang="ts">
	import type { Circle } from '$lib/app/types';
	import Input from '$lib/components/Input.svelte';
	import { twJoin } from 'tailwind-merge';

	export let activeColor: number;
	export let circle: Circle;
</script>

<div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
	{#each circle.colors as color, i}
		<div class="flex gap-2">
			<div class="w-14 h-8 rounded border border-surface-400 flex">
				<button
					on:click={() => (activeColor = i)}
					style={`background: ${color.value};`}
					class={twJoin('grow rounded outline-primary-600 outline-2', activeColor === i ? 'outline' : '')}
				>
					<span class="sr-only">select color {i + 1}</span>
				</button>
			</div>
			<Input tw="w-full border p-1 text-center" bind:value={color.stopAt} />
		</div>
	{/each}
</div>
