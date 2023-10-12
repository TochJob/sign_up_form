<template>
  <button class="button">
    <CLoader v-if="isLoading" class="button__loader"/>
    <slot v-else></slot>
  </button>
</template>
<script>
import CLoader from "@/components/UI/Loaders/CLoader.vue";
export default {
  name: "BOutline",
  components: {
    CLoader,
  },
  props: {
    isLoading: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.button {
  border-radius: 9px;
  border: 1px solid #07a86e;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  color: #07a86e;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #bdffe7;
  }
  &__loader{

  }
}
</style>
