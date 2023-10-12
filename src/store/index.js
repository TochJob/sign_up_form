import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPublic: false,
    isPermission: true,
    permissonError: false,
    isFormVisible: true,
    inputsList: {
      username: {
        title: "Имя",
        value: "",
        type: "text",
        error: "",
      },
      position: {
        title: "Должность",
        value: "",
        type: "select",
        error: "",
      },
      email: {
        title: "Email",
        type: "email",
        value: "",
        error: "",
      },
      password: {
        title: "Пароль",
        type: "password",
        value: "",
        error: "",
      },
      password_repeat: {
        title: "Повторите пароль",
        type: "password",
        value: "",
        error: "",
      },
    },
    positionList: [
      { value: 1, name: "Дворник1" },
      { value: 2, name: "Дворник2" },
      { value: 3, name: "Дворник3" },
      { value: 4, name: "Дворник4" },
    ],
  },
  getters: {
    isPublic: ({ isPublic }) => isPublic,
    inputsList: ({ inputsList }) => inputsList,
    positionList: ({ positionList }) => positionList,
    isPermission: ({ isPermission }) => isPermission,
    permissonError: ({ permissonError }) => permissonError,
    isFormVisible: ({ isFormVisible }) => isFormVisible,
  },
  mutations: {
    CHANGE_FORM_VISIBLE(state) {
      state.isFormVisible = false;
    },
    CHANGE_IS_PUBLIC(state, bool) {
      state.isPublic = bool;
    },
    CHANGE_IS_PERMISSION(state) {
      state.isPermission = !state.isPermission;
    },
    CHANGE_INPUT_LIST(state, data) {
      const { element, value } = data;
      state.inputsList[element].value = value;
    },
    CHANGE_INPUT_ERROR(state, data) {
      const { element, error } = data;
      state.inputsList[element].error = error;
    },
    REMOVE_PERMISSION_ERROR(state) {
      state.permissonError = false;
    },
  },
  actions: {
    checkValidInputs({ state }) {
      Object.entries(state.inputsList).forEach((item) => {
        if (!item[1].value) item[1].error = "Необходимо заполнить данное поле";
      });
      return;
    },
    async submitForm({ state, dispatch }) {
      if (!state.isPermission) {
        console.log(0);

        state.permissonError = true;
        return;
      }
      console.log(1);
      // dispatch("checkValidInputs");
      const data = {
        public: state.isPublic ? 1 : 0,
        username: state.inputsList.username.value,
        role: state.inputsList.position.value,
        email: state.inputsList.email.value,
        password: state.inputsList.password.value,
        password_repeat: state.inputsList.password_repeat.value,
      };

      try {
        const response = await axios.post("https://lmstestapi.reezonly.com/v1/user/signup", data);
        if (!response.data.success) {
          if (!state.inputsList.position.value) {
            state.inputsList.position.error = "Поле обязательно";
          }
          Object.entries(response.data.errors).forEach((item) => {
            state.inputsList[item[0]].error = item[1][0];
          });
          return;
        }
        return response.data;
      } catch (error) {
        console.error(new Error(error));
      }
    },
  },
  modules: {},
});
