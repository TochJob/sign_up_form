<template>
  <div class="public">
    <div class="wrapper public__wrapper">
      <CSwitch @swithed="swithed" />
      <label for="switch" class="public__label">Публичный профиль</label>
    </div>
    <p class="public__description">
      Включает профиль для просмотра другими пользователями по ссылке
    </p>
  </div>
</template>
<script>
import CSwitch from "@/components/UI/Inputs/CSwitch.vue";
import { mapMutations } from "vuex";

export default {
  name: "APublic",
  components: { CSwitch },
  methods: {
    ...mapMutations(["CHANGE_IS_PUBLIC"]),
    swithed(bool) {
      this.CHANGE_IS_PUBLIC(bool);
    },
  },
};
</script>
<style lang="scss">
.public {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  gap: 15px;
  &__wrapper {
    gap: 15px;
  }
  &__label {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    cursor: pointer;
  }
  &__description {
    color: #696977;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021px;
  }
}
</style>
