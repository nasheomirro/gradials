<script lang="ts">
	import { limit } from '$lib/utils';
	import { onMount } from 'svelte';

	/** a number from 0 - 100, this maps the shtick with the container */
	export let value: number;
	export let style: string;

	/** add the alpha background image */
	export let alphaBg: boolean = false;

	let container: HTMLDivElement;
	let isHolding: boolean = false;

	/** for touch events */
	let touchId: number | null = null;

	function onMouseUp() {
		isHolding = false;
	}

	function onTouchEnd(event: TouchEvent) {
		if (!isHolding) return;

		const touches = Array.from(event.changedTouches);
		touches.forEach((touch) => {
			if (touch.identifier === touchId) {
				touchId = null;
				isHolding = false;
			}
		});
	}

	function onMouseDown(event: MouseEvent) {
    event.preventDefault();
    
		isHolding = true;
		pickColor(event.clientX);
	}

	function onTouchStart(event: TouchEvent) {
		const touches = Array.from(event.targetTouches);
		// touch must start on element, uses one finger, and cancelable
		if (touches.length === 0 || touches.length >= 2 || !event.cancelable) return;

		event.preventDefault();
		isHolding = true;
		const touch = touches[0];
		touchId = touch.identifier;
		pickColor(touch.clientX);
	}

	function onMouseMove(event: MouseEvent) {
		if (!isHolding) return;
		pickColor(event.clientX);
	}

	function onTouchMove(event: TouchEvent) {
		if (!isHolding) return;
		const touches = Array.from(event.changedTouches);
		touches.forEach((touch) => {
			if (touch.identifier === touchId) {
				pickColor(touch.clientX);
			}
		});
	}

	onMount(() => {
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('touchmove', onTouchMove);
		window.addEventListener('mouseup', onMouseUp);
		window.addEventListener('touchend', onTouchEnd);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('mouseup', onMouseUp);
			window.removeEventListener('touchend', onTouchEnd);
		};
	});

	function pickColor(x: number) {
		const containerWidth = container.offsetWidth;
		const mouseX = x - container.getBoundingClientRect().left;
		const rawPercentage = (mouseX / containerWidth) * 100;
		// have upper and lower limit to 0 and 100
		const percentage = limit(rawPercentage, 0, 100);
		value = parseFloat(percentage.toFixed(2));
	}

	$: thumbStyle = `left: ${value}%`;
</script>

<!-- TODO: look up accessibility for sliders -->
<div role="none" on:mousedown={onMouseDown} class="flex rounded w-full">
	<div class:alpha-bg={alphaBg} class="grow flex">
		<div bind:this={container} class="grow rounded border border-surface-400 h-7 relative" {style}>
			<div
				on:touchstart={onTouchStart}
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
