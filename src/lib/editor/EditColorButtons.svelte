<script lang="ts">
	import type { Circle } from "$lib/app/types";
	import { twJoin } from "tailwind-merge";

  export let activeColor: number;
  export let circle: Circle;
</script>

<div class="flex flex-col gap-2 mb-4">
  {#each circle.colors as color, i}
    <div class="flex gap-4">
      <button
        on:click={() => (activeColor = i)}
        style={`background: ${color.value};`}
        class={twJoin(
          'w-14 h-8 border rounded',
          activeColor === i ? 'border-2 border-black' : ''
        )}
        class:border-2={activeColor === i}
      >
        <span class="sr-only">select color {i + 1}</span>
      </button>
      <input class="w-full border p-1 text-center" bind:value={color.stopAt} />
    </div>
  {/each}
</div>