<script lang="ts">
	import Copy from '$lib/components/icons/Copy.svelte';

	export let style: string;
	function onCopy() {
		navigator.clipboard.writeText(style);
	}
</script>

<div
	class:hidden={!style}
	class="w-full relative p-3 md:p-4 font-bold bg-surface-700 text-surface-200 rounded border border-surface-400 text-sm font-mono"
>
	{style}
	<button on:click={onCopy} class="absolute bottom-2 right-2 w-4 aspect-square hover:scale-110">
		<span class="sr-only">copy style</span>
		<Copy />
	</button>
</div>
