<script lang="ts">
	import { radials } from '$lib/radials/radials';
	import { getBackgroundStyle } from '$lib/radials/utils';
	import RadialDisplay from '$lib/radials/display/RadialDisplay.svelte';
	import RadialList from '$lib/radials/editor/RadialList.svelte';
	import Github from '$lib/components/icons/Github.svelte';

	$: style = getBackgroundStyle($radials);
</script>

<section class="container max-w-screen-lg px-4 md:px-10 md:pb-20 mx-auto">
	<div class="py-4 flex sm:mb-2 justify-end">
		<a
			href="https://github.com/nasheomirro/gradials"
			target="_blank"
			class="w-6 aspect-square hover:text-surface-500 transition"
		>
			<span class="sr-only">link to github repository</span>
			<Github />
		</a>
	</div>
	<RadialDisplay {style} />
	<RadialList />
</section>
