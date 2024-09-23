<script lang="ts">
  import { onMount } from 'svelte';
  let canvasRef: HTMLCanvasElement;

  onMount(() => {

  })
</script>

<div class="flex-grow m-3 overflow-hidden" style="width: 100%; height: 100%;">
  <canvas bind:this={canvasRef} width="500" height="300" style="width: 100%; height: 100%;"></canvas>
</div>

<style>
  .flex-grow {
    flex-grow: 1;
  }
  .m-3 {
    margin: 1rem;
  }
  .overflow-hidden {
    overflow: hidden;
  }
</style>
