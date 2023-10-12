<template>
  <label class="container">
    <input v-model="isChecked" class="container__input" id="checkbox" type="checkbox" />
    <span :class="{ error: error }" class="container__checkmark"></span>
  </label>
</template>
<script>
export default {
  name: "CCheckbox",
  data() {
    return {
      isChecked: true,
    };
  },
  props: {
    error: Boolean,
  },
  watch: {
    isChecked() {
      this.$emit("switchCheck", this.isChecked);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: block;
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 5px;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 8px;
      top: 4px;
      width: 3px;
      height: 8px;
      border: solid #000;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &.error {
      border: 1px solid red;
      animation: shake 0.5s;
    }
  }
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .container__checkmark {
  background: #ffd467;
}

/* Show the checkmark when checked */
.container input:checked ~ .container__checkmark:after {
  display: block;
}
</style>
