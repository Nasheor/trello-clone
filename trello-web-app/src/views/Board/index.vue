<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <div
        class="column"
        v-for="(column, $columnIndex) in board.columns"
        :key="$columnIndex"
      >
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <div
            class="task"
            v-for="(task, $taskIndex) in column.tasks"
            :key="$taskIndex"
          >
            <span class="w-full flex-no-shrink font-bold">
              {{ task.name }}
            </span>
            <p
              v-if="task.description"
              class="w-full flex-no-shrink mt-1 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Board.js"></script>
<style src="./Board.css" lang="css"></style>
