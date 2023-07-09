<script lang="ts">
	import { store } from '$lib/app/store';
	import { getBackgroundStyle } from '$lib/app/utils';
	import Display from '$lib/components/Display.svelte';
	import EditCircle from '$lib/editor/EditCircle.svelte';
	import EditList from '$lib/editor/EditList.svelte';

	$: style = getBackgroundStyle($store);
	let active: number | null = null;

</script>

<div class="container max-w-screen-lg p-5 md:p-10 mx-auto">
	<Display {style} />
  <EditList />
</div>
