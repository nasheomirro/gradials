<script lang="ts">
	import type { FilterListeners } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = FilterListeners<HTMLButtonAttributes, 'on:click'>;
	interface $$Props extends Props {}

	$: ({ class: tw, ...rest } = $$restProps);
</script>

<button
	on:click
	class={twMerge(
		'w-12 p-1 rounded font-semibold focus:outline-surface-500 hover:bg-primary-200 transition-colors border border-surface-400 bg-primary-100 text-sm text-surface-600 text-center',
		tw
	)}
	{...rest}
>
	<slot />
</button>
