<script lang="ts">
	import type { FilterListeners } from '$lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = FilterListeners<HTMLInputAttributes>;

	export let value: any = undefined;

	$: ({ class: tw, ...rest } = $$restProps);
</script>

<input
	class={twMerge(
		'w-12 p-1 rounded font-semibold focus:outline-primary-600 border border-surface-400 text-sm text-surface-600 text-center',
		tw
	)}
	bind:value
	{...rest}
/>

<style>
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button,
	input[type='number'] {
		-webkit-appearance: none;
		margin: 0;
		-moz-appearance: textfield !important;
	}
</style>
