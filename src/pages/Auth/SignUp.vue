<template>
  <section>
    <transition name="slide-up">
      <div v-if="isFormVisible" class="sign">
        <h1 class="sign__title">Регистрация</h1>
        <AForm @changeVisible="changeVisible" :defaultValues="defaultValues" class="sign__form" />
      </div>
    </transition>
    <transition name="slide-down">
      <p class="sign__success" v-if="!isFormVisible">Вы успешно зарегистрированы!</p>
    </transition>
  </section>
</template>
<script>
import AForm from "@/components/Auth/AForm.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SignUp",
  components: { AForm },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["CHANGE_FORM_VISIBLE"]),
    changeVisible() {
      this.CHANGE_FORM_VISIBLE();
    },
  },
  computed: {
    ...mapGetters(["isFormVisible", "positionList"]),
    defaultValues() {
      return {
        username: "default_name",
        position: this.positionList[2],
        email: "default@defgault.def",
        password: "qweewq",
        password_repeat: "qweewq",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  overflow: hidden;
  padding: 0 15px;
}
.sign {
  background: #fdfdfd;
  border-radius: 15px;
  max-width: 958px;
  &__title {
    color: #000;
    padding: 27px;
    font-size: 19px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -0.066px;
    box-shadow: 0px -1px 0px 0px #edeff3 inset;
  }
  &__success {
    background: #fff;
    font-size: 32px;
    padding: 15px;
    border-radius: 15px;
    font-weight: 500;
    text-align: center;
  }
  &__form {
    padding: 27px 20px 35px 20px;
  }
}

@media (min-width: 575.98px) {
  section {
    padding: 0 calc(50vw - 270px);
  }
}

@media (min-width: 767.98px) {
  section {
    padding: 0 calc(50vw - 360px);
  }
}

@media (min-width: 991.98px) {
  section {
    padding: 0 calc(50vw - 480px);
  }
}

@media (min-width: 1199.98px) {
  section {
    padding: 0 calc(50vw - 590px);
  }
}

@media screen and (max-width: 575.98px) {
  .sign {
    &__form {
      padding: 22px 15px 30px 15px;
    }
  }
}
</style>
