<script lang="ts">
	import type { Color } from '$lib/app/types';
	import { getHSLObject, getHSLString } from '$lib/app/utils';
	import AlphaPicker from '$lib/picker/AlphaPicker.svelte';
	import HuePicker from '../picker/HuePicker.svelte';
	import LightnessPicker from '../picker/LightnessPicker.svelte';
	import SaturatePicker from '../picker/SaturatePicker.svelte';

	export let color: Color;
	let HSL = getHSLObject(color);
	$: color.value = getHSLString(HSL);
</script>

<div class="flex flex-col w-full gap-1.5">
	<div class="flex items-center">
    <span class="mr-3 font-bold text-gray-400 w-4 text-center">H</span>
		<input class="w-12 px-1 border py-0.5 text-center mr-2 md:mr-0" bind:value={HSL.h} />
		<HuePicker bind:hue={HSL.h} />
	</div>
	<div class="flex items-center">
    <span class="mr-3 font-bold text-gray-400 w-4 text-center">L</span>
		<input class="w-12 px-1 border py-0.5 text-center mr-2 md:mr-0" bind:value={HSL.s} />
		<SaturatePicker HSLColor={HSL} bind:saturation={HSL.s} />
	</div>
	<div class="flex items-center">
    <span class="mr-3 font-bold text-gray-400 w-4 text-center">S</span>
		<input class="w-12 px-1 border py-0.5 text-center mr-2 md:mr-0" bind:value={HSL.l} />
		<LightnessPicker HSLColor={HSL} bind:lightness={HSL.l} />
	</div>
	<div class="flex items-center">
    <span class="mr-3 font-bold text-gray-400 w-4 text-center">A</span>
		<input class="w-12 px-1 border py-0.5 text-center" bind:value={HSL.a} />
		<AlphaPicker HSLColor={HSL} bind:alpha={HSL.a} />
	</div>
</div>
