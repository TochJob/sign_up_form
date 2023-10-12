<template>
  <div class="permission wrapper">
    <CCheckbox @switchCheck="switchCheck" :error="permissonError" />
    <label class="permission__label" for="checkbox"
      >Нажимая на кнопку “Регистрация”, я подтверждаю свое согласение с политикой конфиденциальности
      и обработки персональных данных</label
    >
  </div>
</template>
<script>
import CCheckbox from "@/components/UI/Inputs/CCheckbox.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: { CCheckbox },
  methods: {
    ...mapMutations(["CHANGE_IS_PERMISSION", "REMOVE_PERMISSION_ERROR"]),
    switchCheck(bool) {
      if (bool) this.REMOVE_PERMISSION_ERROR();
      this.CHANGE_IS_PERMISSION();
    },
  },
  computed: {
    ...mapGetters(["permissonError"]),
  },
};
</script>
<style lang="scss" scoped>
.permission {
  align-items: flex-start;
  padding: 25px 0 35px;
  gap: 15px;
  &__label {
    color: #000;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021px;
    width: 80%;
  }
}
</style>
