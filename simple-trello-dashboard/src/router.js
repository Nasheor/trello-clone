/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Board from "@/views/pages/Board/Board.vue";
import Task from "@/views/modals/Task/Task.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: Board,
      children: [{
        path: 'task/:id',
        name: 'task',
        component: Task
      }]
    },
  ]
});
