<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Circle from '$lib/components/icons/Circle.svelte';
	import Ellipse from '$lib/components/icons/Ellipse.svelte';
	import type { Radial } from '$lib/types';
	import { twJoin } from 'tailwind-merge';

	export let radial: Radial;
</script>

<div class="mb-4 flex gap-2 items-center">
	<div class="w-1/3 flex gap-2 items-center">
		<div class="w-7 rounded border border-surface-400 flex">
			<button
				on:click={() => (radial.shape = 'ellipse')}
				class={twJoin(
					'p-0.5 grow outline-2 rounded outline-primary-600',
					radial.shape === 'ellipse' && 'outline'
				)}
			>
				<Ellipse />
			</button>
		</div>
		<div class="w-7 rounded border border-surface-400 flex">
			<button
				on:click={() => (radial.shape = 'circle')}
				class={twJoin(
					'p-0.5 rounded grow outline-2 outline-primary-600',
					radial.shape === 'circle' && 'outline'
				)}
			>
				<Circle />
			</button>
		</div>
		<span class="ml-auto mr-auto text-sm font-bold text-surface-400 opacity-80">at</span>
	</div>
	<div class="w-2/3 flex gap-2">
		<Input type="number" class="w-full text-center" bind:value={radial.position.x} />
		<Input type="number" class="w-full text-center" bind:value={radial.position.y} />
	</div>
</div>
