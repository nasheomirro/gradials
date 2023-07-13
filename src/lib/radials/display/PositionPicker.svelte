<script lang="ts">
	import type { Radial } from '$lib/types';
	import { limit } from '$lib/utils';
	import { onMount } from 'svelte';

	export let position: Radial['position'];
	export let display: HTMLDivElement;

	let isHolding = false;

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
		movePosition(event.clientX, event.clientY);
	}

	function onTouchStart(event: TouchEvent) {
		const touches = Array.from(event.targetTouches);
		// touch must start on element, uses one finger, and cancelable
		if (touches.length === 0 || touches.length >= 2 || !event.cancelable) return;

		event.preventDefault();
		isHolding = true;
		const touch = touches[0];
		touchId = touch.identifier;
		movePosition(touch.clientX, touch.clientY);
	}

	function onMouseMove(event: MouseEvent) {
		if (!isHolding) return;
		movePosition(event.clientX, event.clientY);
	}

	function onTouchMove(event: TouchEvent) {
		if (!isHolding) return;

		const touches = Array.from(event.changedTouches);
		touches.forEach((touch) => {
			if (touch.identifier === touchId) {
				movePosition(touch.clientX, touch.clientY);
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

	function movePosition(x: number, y: number) {
		const displayWidth = display.offsetWidth;
		const displayHeight = display.offsetHeight;
		const mouseX = x - display.getBoundingClientRect().left;
		const mouseY = y - display.getBoundingClientRect().top;

		const rawPercentageX = (mouseX / displayWidth) * 100;
		const rawPercentageY = (mouseY / displayHeight) * 100;

		const percentageX = limit(rawPercentageX, 0, 100);
		const percentageY = limit(rawPercentageY, 0, 100);

		position.x = parseFloat(percentageX.toFixed(2));
		position.y = parseFloat(percentageY.toFixed(2));
	}

	$: style = `left: ${position.x}%; top: ${position.y}%`;
</script>

<!-- TODO: look up accessibility for whatever this is -->
<div
	role="none"
	on:mousedown={onMouseDown}
	on:touchstart={onTouchStart}
	{style}
	class="rounded-full -translate-x-1/2 -translate-y-1/2 w-3 bg-surface-100 top-0 left-0 absolute border-2 aspect-square"
/>
