<script lang="ts">
	/** a number from 1 - 100, this maps the shtick with the container */
	export let value: number;
	export let style: string;

	let container: HTMLDivElement;
	let isHolding: boolean = false;

	function onHoldDown() {
		isHolding = true;
	}
	function onHoldUp() {
		isHolding = false;
	}

	function onMouseMove(event: MouseEvent) {
		if (!isHolding) return;

		const containerWidth = container.offsetWidth;
		const mouseX = event.clientX - container.getBoundingClientRect().left;
		const rawPercentage = (mouseX / containerWidth) * 100;
		const percentage = rawPercentage > 100 ? 100 : rawPercentage < 0 ? 0 : rawPercentage;

		value = percentage;
	};
</script>

<!-- TODO: look up accessibility for sliders -->
<div
	role="none"
	on:mousedown={onHoldDown}
	on:mouseleave={onHoldUp}
	on:mouseup={onHoldUp}
	on:mousemove={onMouseMove}
	class="flex rounded w-full p-3 relative"
>
	<div bind:this={container} class="grow rounded h-6" {style} />
</div>
