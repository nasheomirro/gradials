<script lang="ts">
	import { store } from '$lib/app/store';
	import { getBackgroundStyle } from '$lib/app/utils';
	import Display from '$lib/display/Display.svelte';
	import CircleList from '$lib/editor/CircleList.svelte';

	$: style = getBackgroundStyle($store);
</script>

<div class="container max-w-screen-lg p-5 md:p-10 mx-auto">
	<Display {style} />
  <CircleList />
</div>
