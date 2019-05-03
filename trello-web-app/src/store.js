import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "./default-board";
import { saveStatePlugin } from "./utils";

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask(state) {
      return id => {
        // eslint-disable-next-line no-debugger
        // debugger;

        return state.board.columns
          .map(column => column.tasks) // [[task1, task2], [task3, task4], ...]
          .reduce((result, tasks) => result.concat(tasks), []) //
          .find(task => task.id === id);
      };
    }
  },
  mutations: {},
  actions: {}
});
