<script lang="ts" context="module">
  export type BackgroundProps = {
    color?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  };

  const colors = [
    ['#dbddbb', '#6ba587', '#d5d88d', '#88b884'],
    ['#87bda5', '#b9dd83', '#d5d88c', '#a5c885'],
    ['#81a9f0', '#9ed3f4', '#aeded2', '#c0c4ec'],
    ['#97beeb', '#b1e9ea', '#c6b1ef', '#efb7dc'],
    ['#d1e395', '#91d2cc', '#76b8e6', '#91d69a'],
    ['#ecae8e', '#e8c583', '#eba0c1', '#c7b1eb'],
    ['#e998c3', '#e9a4d6', '#b79fe9', '#ecb074'],
    ['#e99d57', '#eed171', '#ee9d68', '#e0d07e'],
    ['#40cdde', '#ac86ed', '#e984d8', '#efd359'],
  ];
</script>

<script lang="ts">
  import { TWallpaper } from './background-wallpaper';

  let { color = 0 }: BackgroundProps = $props();

  let el: HTMLCanvasElement;
  let set = $derived(colors[color]);

  $effect(() => {
    const wallpaper = TWallpaper();

    wallpaper.init(el);
    wallpaper.scrollAnimate(true);
  });

  // style="background: linear-gradient(29.61deg, {set[2]} 3.79%, {set[3]} 22.08%, {set[1]} 51.88%, {set[0]} 82.65%)"
</script>

<div class="mf-background" style="background: {set[1]}">
  <canvas
    class="mf-background__filling"
    bind:this={el}
    width={50}
    height={50}
    data-colors={set.join(',')}
  ></canvas>
  <div class="mf-background__pattern"></div>
</div>
