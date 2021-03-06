import { createStore } from "vuex";

export const store = createStore({
  state () {
    return {
      author: "Asiter",
      describe: "一个贴膜的少年",
    };
  },
});
