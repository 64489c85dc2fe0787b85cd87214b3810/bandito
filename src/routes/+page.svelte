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
    Background,
    Group,
    CellButton,
  } from '$lib';
  import CellIcon from '$lib/cell-icon.svelte';
  import Modal from '$lib/modal.svelte';
  import Popup from '$lib/popup.svelte';
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

  let popupShow = $state(false);
</script>

<div class="container">
  <FormItem>
    <Input />
  </FormItem>

  <button onclick={() => (popupShow = true)}>show modal</button>

  <Popup bind:show={popupShow} position="center">lol</Popup>
  <Modal bind:open={popupShow}>lol</Modal>

  <Avatar size={36} class="gradient-6" initials="ВА" />
  <Group>
    <Group header="test" footer="kek">
      <SimpleCell>
        {#snippet image()}
          <CellIcon name="add_alt" data-accent="indigo" />
        {/snippet}
        Номер телефона2
      </SimpleCell>
      <SimpleCell indicator="g•••@gmail.com">
        {#snippet image()}
          <Icon set={28} name="phone_outline" />
        {/snippet}
        Email2
      </SimpleCell>
      <SimpleCell indicator="g•••@gmail.com">
        {#snippet image()}
          <Icon set={28} name="phone_outline" />
        {/snippet}
        last
      </SimpleCell>
      <CellButton>lol</CellButton>
      <CellButton destructive>des</CellButton>
      <CellButton disabled>disabled</CellButton>
    </Group>
    <Group>
      <SimpleCell indicator="+7 ••• •• •• 96">
        {#snippet image()}
          <Icon set={28} name="phone_outline" />
        {/snippet}
        Номер телефона
      </SimpleCell>
      <SimpleCell indicator="g•••@gmail.com">
        {#snippet image()}
          <Icon set={28} name="phone_outline" />
        {/snippet}
        Email
      </SimpleCell>
    </Group>
    <Group>
      <SimpleCell indicator="+7 ••• •• •• 96">
        {#snippet image()}
          <Icon set={28} name="phone_outline" />
        {/snippet}
        Номер телефона
      </SimpleCell>
      <SimpleCell indicator="g•••@gmail.com">
        {#snippet image()}
          <Icon set={28} name="phone_outline" />
        {/snippet}
        Email
      </SimpleCell>
    </Group>
  </Group>

  <Tabs variant="underline" activeId="12">
    <TabsItem id="11">1123 123 123 123 1231 23 12</TabsItem>
    <TabsItem id="12">1</TabsItem>
    <TabsItem id="test">lol</TabsItem>
  </Tabs>

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
          <Button data-accent={color} {variant}>{variant}</Button>
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
