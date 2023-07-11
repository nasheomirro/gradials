<script lang="ts">
	import type { HSLColor } from '$lib/types';
	import { getHSLString } from '$lib/utils';
	import Picker from './Picker.svelte';

	export let HSLColor: HSLColor;
	export let alpha: number;

	$: style = `background: linear-gradient(
      to right,
      ${getHSLString({ ...HSLColor, a: 0 })},
      ${getHSLString({ ...HSLColor, a: 100 })}
    );`;
</script>

<Picker bind:value={alpha} {style} alphaBg />
