<script lang="ts">
  const materials = ['thinUltra', 'thin', 'regular', 'thick', 'thickUltra', 'bar'];
</script>

<div class="vstack-5" style="gap: 12vh; padding: 13.63636364vh 10vw;">
  {#each materials as material}
    <div
      class="hstack-5 material-{material}"
      style="width: 80vw; height: 72.72727272vh; border-radius: 20px"
    >
      <p>material: {material}</p>
    </div>
  {/each}
</div>
