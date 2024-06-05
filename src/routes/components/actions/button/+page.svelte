<script>
  import { Button } from '$lib';
</script>

<Button>Add product</Button>

<Button variant="plain">View shipping settings</Button>

<Button variant="tertiary">View shipping settings</Button>

<Button variant="plain" tone="critical">Remove</Button>

<Button variant="primary">Save theme</Button>

<Button variant="primary" tone="critical">View shipping settings</Button>

<Button size="large">Create store</Button>

<Button fullWidth>Add customer</Button>

<Button variant="plain" textAlign="left">
  This is a really long string of text that overflows onto the next line we need to put in a lot of
  words now you can see the alignment. It is very long but a customer could potentially name
  something this long.
</Button>

<Button pressed>pressed</Button>

<Button variant="plain" disclosure="down">Show More</Button>

<div style:width="200px">
  <Button fullWidth textAlign="left" disclosure="down">Show more</Button>
</div>

<div style:height="100px">
  <Button disclosure="select" onclick={() => console.log('Open Popover')}>Select options</Button>
</div>
