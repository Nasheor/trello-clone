<template>
    <div>
      <div class="column bg-grey-light m-4" v-if="isTaskOpen === false">
          <div class="flex items-center mb-2 font-bold">
            {{ getColumnName() }}
          </div>
          <div class="list-reset">
            <div
              class="task"
              v-for="(task, $taskIndex) of columnData.tasks"
              :key="$taskIndex"
              draggable
              @dragstart="pickupTask($event, $taskIndex)"
              @click="goToTask(task)"
              @drop.stop="dropColumnOrTask(($event, columnData.tasks, $taskIndex))"
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
            @keyup.enter="createTask($event, columnData.tasks)"
          />
      </div>
      <div class="task-bg" @click.self="close" v-else>
          <router-view />
      </div>
    </div>
</template>

<script src="./BoardColumn.js"></script>
<style src="./BoardColumn.css" lang="css"></style>