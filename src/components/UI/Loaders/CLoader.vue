<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: "CLoaderF",
};
</script>
<style lang="scss" scoped>
.loader {
  width: 20px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 calc(50% - 10px), #0000 0 calc(50% + 10px), #000 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% calc(200% + 20px);
  animation: sticks 1s infinite linear;
}

</style>
