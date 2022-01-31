import { createStore } from "vuex";
import dataBase from "../JSON/mockData.json";

export default createStore({
  state: {
    results: [],
  },
  getters: {
    RESULTS(state) {
      return state.results;
    },
    FILTERED_RESULTS(state) {
      return state.results.slice(0, 3);
    },
  },
  mutations: {
    UPDATE_RESULTS(state, payload) {
      state.results = payload;
    },
    PUSH_TO_RESULTS(state, payload) {
      state.results.push(payload);
    },
  },
  actions: {
    SEARCH(context, payload) {
      context.commit("UPDATE_RESULTS", []);
      dataBase.data.forEach((d) => {
        if (d[0].toLowerCase().includes(payload.toLowerCase())) {
          context.commit("PUSH_TO_RESULTS", d);
        }
        context.state.results.sort();
      });
    },
  },
});
