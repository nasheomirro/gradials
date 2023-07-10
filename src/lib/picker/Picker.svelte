<script lang="ts">
	/** a number from 0 - 100, this maps the shtick with the container */
	export let value: number;
	export let style: string;
	export let alphaBg: boolean = false;

	let container: HTMLDivElement;
	let isHolding: boolean = false;

	function onHoldDown(event: MouseEvent) {
		isHolding = true;
		pickColor(event.clientX);
	}

	function onHoldUp() {
		isHolding = false;
	}

	function onMouseMove(event: MouseEvent) {
		if (!isHolding) return;
		pickColor(event.clientX);
	}

	function pickColor(x: number) {
		if (!isHolding) return;

		const containerWidth = container.offsetWidth;
		const mouseX = x - container.getBoundingClientRect().left;
		const rawPercentage = (mouseX / containerWidth) * 100;
		const percentage = rawPercentage > 100 ? 100 : rawPercentage < 0 ? 0 : rawPercentage;
		value = parseFloat(percentage.toFixed(2));
	}

	$: thumbStyle = `left: ${value}%`;
</script>

<!-- TODO: look up accessibility for sliders -->
<div
	role="none"
	on:mousedown={onHoldDown}
	on:mouseleave={onHoldUp}
	on:mouseup={onHoldUp}
	on:mousemove={onMouseMove}
	class="flex rounded w-full"
>
	<div class:alpha-bg={alphaBg} class="grow flex">
		<div bind:this={container} class="grow rounded border border-surface-400 h-7 relative" {style}>
			<div
				class="h-[120%] absolute bg-surface-100 border-surface-600 p-0.5 border-2 rounded -translate-x-1/2 top-1/2 -translate-y-1/2"
				style={thumbStyle}
			/>
		</div>
	</div>
</div>

<style>
	/* responsible for the alpha effect */
	.alpha-bg {
		background-image: linear-gradient(45deg, #ccca 25%, transparent 25%),
			linear-gradient(-45deg, #ccca 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #ccca 75%),
			linear-gradient(-45deg, transparent 75%, #ccca 75%);
		background-size: 20px 20px;
		background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
	}
</style>
