<script lang="ts">
	import Picker from './Picker.svelte';

	export let hue: number;

	let style = `background: linear-gradient(
			to right,
			hsl(0deg 100% 50%),
			hsl(30deg 100% 50%),
			hsl(60deg 100% 50%),
			hsl(90deg 100% 50%),
			hsl(120deg 100% 50%),
			hsl(150deg 100% 50%),
			hsl(180deg 100% 50%),
			hsl(210deg 100% 50%),
			hsl(240deg 100% 50%),
			hsl(270deg 100% 50%),
			hsl(300deg 100% 50%),
			hsl(330deg 100% 50%),
			hsl(360deg 100% 50%)
		);`;
</script>

<Picker {style} upperBound={360} bind:value={hue} />
