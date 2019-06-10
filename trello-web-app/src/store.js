import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "./default-board";
import { saveStatePlugin, uid } from "./utils";

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
        return state.board.columns
          .map(column => column.tasks) // [[task1, task2], [task3, task4], ...]
          .reduce((result, tasks) => result.concat(tasks), []) //
          .find(task => task.id === id);
      };
    }
  },
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        id: uid(),
        description: ""
      });
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value;
    },
    CREATE_COLUMN(state, { columns, name }) {
      columns.push({
        name,
        tasks: []
      });
    },
    MOVE_TASK(state, { fromTasks, toTasks, taskIndex }) {
      toTasks.push(fromTasks[taskIndex]);
      fromTasks.splice(taskIndex, 1);
    }
  },
  actions: {}
});
