<template>
  <div class="switch">
    <input type="checkbox" v-model="isChecked" id="switch" /><label for="switch"></label>
  </div>
</template>
<script>
export default {
  name: "CSwitch",
  data() {
    return {
      isChecked: false,
    };
  },
  
  watch: {
    isChecked() {
      this.$emit("swithed", this.isChecked);
    },
  },
};
</script>
<style lang="scss" scoped>
.switch {
  display: flex;
}

input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 39px;
  height: 19px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 19px;
  height: 19px;
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;
}

input:checked + label {
  background: #7d7aff;
}

input:checked + label:after {
  left: 100%;
  transform: translateX(-100%);
}

label:active:after {
  width: 10px;
}
</style>
