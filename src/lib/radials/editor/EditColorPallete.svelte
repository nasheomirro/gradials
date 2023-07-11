<script lang="ts">
	import type { RadialColor } from '$lib/types';
	import Input from '$lib/components/Input.svelte';
	import AlphaPicker from '$lib/pickers/AlphaPicker.svelte';
	import HuePicker from '$lib/pickers/HuePicker.svelte';
	import LightnessPicker from '$lib/pickers/LightnessPicker.svelte';
	import SaturatePicker from '$lib/pickers/SaturatePicker.svelte';
	import { getHSLObject, getHSLString } from '$lib/utils';

	export let color: RadialColor;
	let HSL = getHSLObject(color);
	$: color.value = getHSLString(HSL);
</script>

<div class="flex flex-col w-full gap-1.5">
	<div class="flex items-center gap-2.5">
		<span class="font-bold text-surface-400 opacity-60 w-4 text-center">H</span>
		<Input bind:value={HSL.h} />
		<HuePicker bind:hue={HSL.h} />
	</div>
	<div class="flex items-center gap-2.5">
		<span class=" font-bold text-surface-400 opacity-60 w-4 text-center">S</span>
		<Input bind:value={HSL.s} />
		<SaturatePicker HSLColor={HSL} bind:saturation={HSL.s} />
	</div>
	<div class="flex items-center gap-2.5">
		<span class="font-bold text-surface-400 opacity-60 w-4 text-center">L</span>
		<Input bind:value={HSL.l} />
		<LightnessPicker HSLColor={HSL} bind:lightness={HSL.l} />
	</div>
	<div class="flex items-center gap-2.5">
		<span class=" font-bold text-surface-400 opacity-60 w-4 text-center">A</span>
		<Input bind:value={HSL.a} />
		<AlphaPicker HSLColor={HSL} bind:alpha={HSL.a} />
	</div>
</div>
