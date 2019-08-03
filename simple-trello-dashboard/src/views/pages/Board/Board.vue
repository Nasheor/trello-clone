<template>
  <div class="board">
    <div class="flex flex-row flex-wrap items-start">
      <div
        class="column bg-grey-light m-4"
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        @drop="dropColumnOrTask($event, column.tasks, $columnIndex)"
        @dragover.prevent
        @dragenter.prevent
        @dragstart="pickupColumn($event, $columnIndex)"
      >
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <div
            class="task"
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            draggable
            @dragstart="pickupTask($event, $taskIndex, $columnIndex)"
            @click="goToTask(task)"
            @drop.stop="
              dropColumnOrTask(($event, column.tasks, $columnIndex, $taskIndex))
            "
          >
            <span class="w-full flex-no-shrink font-bold">
              {{ task.name }}
            </span>
            <p
              v-if="task.description"
              class="w-full flex-no-shrink mt-1 text-sm"
            >
              {{ task.description }}
            </p>
          </div>
        </div>
        <input
          type="text"
          class="block p-2 w-full bg-transparent"
          placeholder="+Enter a new task"
          @keyup.enter="createTask($event, column.tasks)"
        />
      </div>
      <input
        type="text"
        class="column m-4 bg-indigo-dark hover:bg-indigo-lighter"
        placeholder="+Add a new Column"
        @keyup.enter="createColumn($event, board.columns)"
      />
    </div>
    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script src="./Board.js"></script>
<style src="./Board.css" lang="css"></style>
