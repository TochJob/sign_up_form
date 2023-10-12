<template>
  <div id="app">
    <SignUp />
  </div>
</template>

<script>
import SignUp from "@/pages/Auth/SignUp.vue";
export default {
  name: "App",
  components: {
    SignUp,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/animate.scss";
#app {
  background: #1e1e1e;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  align-items: center;
}
</style>
