<script lang="ts">
	import type { HSLColor } from '$lib/app/types';
	import { getHSLString } from '$lib/app/utils';
	import Picker from './Picker.svelte';

	export let HSLColor: HSLColor;
	export let saturation: number;

	$: style = `background: linear-gradient(
      to right,
      ${getHSLString({ ...HSLColor, a: 100, s: 0 })},
      ${getHSLString({ ...HSLColor, a: 100, s: 100 })}
    );`;

</script>

<Picker bind:value={saturation} {style} />
