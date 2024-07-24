<script>
  import { Popup } from '$lib';

  let show = $state(false);
  let show2 = $state(false);
</script>

<button
  onclick={() => {
    show = !show;
  }}>toggle (current {show})</button
>

<Popup bind:show>
  <button
    onclick={() => {
      show2 = !show2;
    }}>toggle2 (current {show2})</button
  >
</Popup>

<Popup bind:show={show2}>lol 2</Popup>
