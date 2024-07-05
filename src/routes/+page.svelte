<script lang="ts">
  import { Avatar, Button, Spinner } from '$lib';

  const onclick = () => {
    console.log(123);
  };

  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'mint',
    'teal',
    'cyan',
    'blue',
    'indigo',
    'purple',
    'pink',
    'brown',
  ];
  const variants = ['light', 'faded', 'flat', 'solid', 'shadow', 'bordered', 'ghost'];
</script>

<Avatar initials="mf" />

<div class="vstack gap-2 p-2">
  {#each colors as color}
    <h1 class="font-title2 text-{color}">{color}</h1>
    <div class="hstack gap-2">
      {#each variants as variant}
        <Button {color} {variant}>{variant}</Button>
      {/each}
    </div>
  {/each}
</div>
