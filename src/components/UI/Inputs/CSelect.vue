<template>
  <div class="custom-select" @blur="open = false">
    <div class="selected" :class="{ open: open, error: error }" @click="startSelect">
      <p v-if="selected" class="selected__selected">{{ selected }}</p>
      <p v-else class="selected__empty">Должность</p>
      <svg
        class="selected__svg"
        :class="{ selected__open: open }"
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M13 9L9.5 12L6 9"
          stroke="#A7A7B6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <p class="selected__error">{{ error }}</p>
    <div class="items" v-if="open">
      <p
        v-for="(option, i) of list"
        :key="i"
        class="selected__item"
        @click="
          selected = option.name;
          open = false;
          $emit('inputChanged', option.value);
        "
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CSelect",
  props: {
    list: {
      type: Array,
      required: true,
    },
    error: String,
  },
  data() {
    return {
      selected: null,
      open: false,
    };
  },
  methods: {
    startSelect(event) {
      this.open = !this.open;
      this.$emit("removeError", event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 100%;
  line-height: 100%;

  .selected {
    height: 100%;
    background-color: #fff;
    border-radius: 11px;
    border: 1px solid #e6e6eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021px;
    &.error {
      border: 1px solid red;
      animation: shake 0.5s;
    }
    &__error {
      font-size: 12px;
      color: red;
    }
    &__svg {
      transition: all 0.3s;
    }
    &__open {
      transform: rotate(-180deg);
    }
    &__selected {
      color: #000;
    }
    &__empty {
      color: #9292a0;
    }
    &.open {
      border: 1px solid #e6e6eb;
      border-radius: 6px 6px 0px 0px;
    }
    &__item {
      color: #000;
      transition: all 0.3s;
      cursor: pointer;
      user-select: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: -0.021px;
      padding: 0.5em;
      &:hover {
        background-color: #e9e9e9;
      }
    }
  }
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #e6e6eb;
  border-left: 1px solid #e6e6eb;
  border-bottom: 1px solid #e6e6eb;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
