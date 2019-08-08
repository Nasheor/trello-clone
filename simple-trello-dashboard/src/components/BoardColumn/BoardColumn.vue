<template>
    <div
        draggable
        @dragover.prevent
        @dragenter.prevent
        @drop="dropColumnOrTask($event, column.tasks, $columnIndex)"
        @dragstart="pickupColumn($event, $columnIndex)">
      <div class="column bg-grey-light m-4">
          <div class="flex items-center mb-2 font-bold">
            {{ getColumnName() }}
          </div>
          <div class="list-reset">
            <TaskCard
              class="task"
              v-for="(task, $taskIndex) of columnData.tasks"
              :key="$taskIndex"
              v-bind:task = "task"
              v-bind:taskIndex = "$taskIndex"
            />
          </div>
          <input
            type="text"
            class="block p-2 w-full bg-transparent"
            placeholder="+Enter a new task"
            @keyup.enter="createTask($event, columnData.tasks)"
          />
      </div>
    </div>
</template>

<script src="./BoardColumn.js"></script>
<style src="./BoardColumn.css" lang="css"></style>