<script lang="ts">
	import { twMerge } from 'tailwind-merge';
  
	export let value: any;
	export let tw: string;
</script>

<input
  type="number"
	class={twMerge(
		'w-12 p-1 rounded font-semibold focus:outline-primary-600 border border-surface-400 text-sm text-surface-600 text-center',
		tw
	)}
	bind:value
/>
