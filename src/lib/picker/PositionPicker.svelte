<script lang="ts">
	import type { Circle } from "$lib/app/types";
  export let position: Circle['position'];

  $: style = `left: ${position.x}%; top: ${position.y}%`;
</script>

<div {style} class="rounded-full -translate-x-1/2 -translate-y-1/2 w-3 bg-surface-100 top-0 left-0 absolute border-2 aspect-square" />
