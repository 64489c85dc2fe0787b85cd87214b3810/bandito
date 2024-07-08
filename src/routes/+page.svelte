<script lang="ts">
  import {
    Avatar,
    Button,
    Spinner,
    FormItem,
    Input,
    Skeleton,
    Popover,
    Tabs,
    TabsItem,
    SimpleCell,
    HorizontalScroll,
  } from '$lib';
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

<div class="container">
  <Tabs variant="underline" activeId="12">
    <HorizontalScroll>
      <TabsItem id="11">1123 123 123 123 1231 23 12</TabsItem>
      <TabsItem id="12">1</TabsItem>
      <TabsItem id="test">lol</TabsItem>
    </HorizontalScroll>
  </Tabs>

  <SimpleCell>lol</SimpleCell>

  <Skeleton width="100px" height="20px" />

  <Popover>lol</Popover>

  <Spinner />

  <Icon set={56} name="archive_outline" />

  <FormItem top="hello world2" bottom="lol">
    <Input />
  </FormItem>

  <Avatar initials="mf" />

  <div class="vstack gap-2 p-2">
    {#each colors as color}
      <h1 class="font-title2 fg-{color}">{color}</h1>
      <div class="hstack gap-2">
        {#each variants as variant}
          <Button {color} {variant}>{variant}</Button>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
