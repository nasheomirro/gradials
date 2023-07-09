<script lang="ts">
	export let style: string | undefined;
</script>

<div class="alpha-bg rounded-lg shadow border overflow-hidden">
	<div {style} class="w-full h-60 md:h-96" />
</div>

<style>
	/* responsible for the alpha effect */
	.alpha-bg {
		background-image: linear-gradient(45deg, #ccca 25%, transparent 25%),
			linear-gradient(-45deg, #ccca 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #ccca 75%),
			linear-gradient(-45deg, transparent 75%, #ccca 75%);
		background-size: 32px 32px;
		background-position: 0 0, 0 16px, 16px -16px, -16px 0px;
	}
</style>
