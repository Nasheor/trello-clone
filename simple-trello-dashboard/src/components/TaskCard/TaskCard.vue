<template>
  <div
    draggable
    @dragover.prevent
    @dragenter.prevent
    @dragstart="setPickupTaskInfo($event, taskIndex, columnIndex)"
    @dragend="dropTask($event, taskIndex, columnIndex)"
    @click="goToTask(task)"
    v-if="isTaskOpen === false"
  >
    <span class="w-full flex-no-shrink font-bold">
      {{ task.name }}
    </span>
    <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
      {{ task.description }}
    </p>
  </div>
  <div class="task-bg" @click.self="close" v-else>
    <router-view />
  </div>
</template>

<script src="./TaskCard.js"></script>
<style src="./TaskCard.css" lang="css"></style>
