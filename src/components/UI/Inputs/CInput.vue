<template>
  <div class="container">
    <input
      @focus="removeError"
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      :class="{ error: error }"
      class="input"
    />
    <label class="input__error" v-if="error">{{ error }}</label>
  </div>
</template>
<script>
export default {
  name: "CInput",
  props: {
    type: String,
    placeholder: String,
    error: String,
    value: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("inputChanged", newValue);
      },
    },
  },
  methods: {
    removeError(event) {
      this.$emit("removeError", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 11px;
  border: 1px solid #e6e6eb;
  padding: 10px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
  outline: none;
  &::placeholder {
    color: #9292a0;
  }
  &__error {
    font-size: 12px;
    color: red;
  }
  &.error {
    border: 1px solid red;
    animation: shake 0.5s;
  }
}
</style>
