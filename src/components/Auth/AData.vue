<template>
  <div class="data">
    <h2 class="data__title">Данные</h2>
    <div class="data__list">
      <div v-for="(item, index) of inputsList" :key="index" class="data__list-item">
        <CSelect
          v-if="item.type === 'select'"
          @inputChanged="updateInputValue(index, $event)"
          @removeError="removeError(index, $event)"
          :error="item.error"
          :value="item.value"
          :list="positionList"
        />
        <CInput
          v-else
          @inputChanged="updateInputValue(index, $event)"
          @removeError="removeError(index, $event)"
          :placeholder="item.title"
          :type="item.type"
          :value="item.value"
          :error="item.error"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import CInput from "@/components/UI/Inputs/CInput.vue";
import CSelect from "@/components/UI/Inputs/CSelect.vue";
export default {
  name: "AData",
  components: { CInput, CSelect },
  methods: {
    ...mapMutations(["CHANGE_INPUT_LIST", "CHANGE_INPUT_ERROR"]),
    updateInputValue(element, value) {
      this.CHANGE_INPUT_LIST({ element, value });
    },
    removeError(element, value) {
      console.log("qwe", element, value);
      this.CHANGE_INPUT_ERROR({ element, error: "" });
    },
  },
  computed: {
    ...mapGetters(["inputsList", "positionList"]),
  },
};
</script>
<style lang="scss" scoped>
.data {
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 20px 0 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  &__title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  &__list {
    display: grid;
    column-gap: 18px;
    row-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "a b"
      "c ."
      "d e";
    &-item {
      height: 39px;
      &:nth-child(4) {
        grid-area: d;
      }
      &:nth-child(5) {
        grid-area: e;
      }
    }
  }
}
@media screen and (max-width: 575.98px) {
  .data {
    gap: 20px;
    padding: 20px 0;
    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
