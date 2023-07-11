<script lang="ts">
	import type { Radial } from '$lib/types';
	import { limit } from '$lib/utils';
	import { onMount } from 'svelte';

	export let position: Radial['position'];
	export let display: HTMLDivElement;

	let isHolding = false;

	function onMouseUp() {
		isHolding = false;
	}

	function onMouseDown(event: MouseEvent) {
		isHolding = true;
		movePosition(event.clientX, event.clientY);
	}

	function onMouseMove(event: MouseEvent) {
		if (!isHolding) return;
		event.preventDefault();
		movePosition(event.clientX, event.clientY);
	}

	onMount(() => {
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', onMouseUp);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
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
	{style}
	class="rounded-full -translate-x-1/2 -translate-y-1/2 w-3 bg-surface-100 top-0 left-0 absolute border-2 aspect-square"
/>
