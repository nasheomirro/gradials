<script lang="ts">
	import type { HSLColor } from '$lib/app/types';
	import { getHSLString } from '$lib/app/utils';
	import Picker from './Picker.svelte';

	export let HSLColor: HSLColor;
	export let lightness: number;

	$: style = `background: linear-gradient(
      to right,
      ${getHSLString({ ...HSLColor, a: 100, l: 0 })},
      ${getHSLString({ ...HSLColor, a: 100, l: 25 })},
      ${getHSLString({ ...HSLColor, a: 100, l: 50 })},
      ${getHSLString({ ...HSLColor, a: 100, l: 75 })},
      ${getHSLString({ ...HSLColor, a: 100, l: 100 })}
    );`;
</script>

<Picker bind:value={lightness} {style} />
