<template>
  <form class="form" @submit.prevent="submit">
    <APublick />
    <AData />
    <APermission />
    <BOutline :isLoading="isSubmit" class="form__button">Регистрация</BOutline>
  </form>
</template>
<script>
import BOutline from "@/components/UI/Buttons/BOutline.vue";
import AData from "@/components/Auth/AData.vue";
import APermission from "@/components/Auth/APermission.vue";
import APublick from "@/components/Auth/APublick.vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "AForm",
  components: { APublick, AData, APermission, BOutline },
  props: {
    defaultValues: Object,
  },
  data() {
    return {
      isSubmit: false,
    };
  },
  methods: {
    ...mapActions(["submitForm"]),
    ...mapMutations(["CHANGE_INPUT_LIST"]),
    async submit() {
      try {
        this.isSubmit = true;
        const response = await this.submitForm();
        if (response.success) {
          this.$emit("changeVisible");
        }
      } catch (error) {
        console.error(new Error(error));
      } finally {
        this.isSubmit = false;
      }
    },
  },
  computed: {
    ...mapGetters(["inputsList"]),
  },
  mounted() {
    if (Object.keys(this.defaultValues).length) {
      Object.entries(this.defaultValues).forEach((item) => {
        this.CHANGE_INPUT_LIST({ element: item[0], value: item[1] });
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  &__button {
    align-self: center;
    padding: 10px 12px;
    min-width: 234px;
    max-height: 37px;
  }
}
</style>
