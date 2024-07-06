<script lang="ts">
  import { Avatar, Button, Spinner, FormItem, Input, Skeleton } from '$lib';
  import { Icon } from '@mftd03/icons';

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

<Skeleton width="100px" height="20px" />

<Spinner />

<Icon set={56} name="archive_outline" />

<FormItem top="hello world2" bottom="lol">
  <Input />
</FormItem>

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
