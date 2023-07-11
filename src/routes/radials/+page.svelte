<script lang="ts">
	import { radials } from '$lib/radials/radials';
	import { getBackgroundStyle } from '$lib/radials/utils';
	import RadialDisplay from '$lib/radials/display/RadialDisplay.svelte';
	import CircleList from '$lib/radials/editor/CircleList.svelte';

	$: style = getBackgroundStyle($radials);
</script>

<div class="container max-w-screen-lg p-5 md:p-10 mx-auto">
	<RadialDisplay {style} />
	<CircleList />
</div>
