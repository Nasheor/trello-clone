<template>
  <div class="board">
    <div class="flex flex-row flex-wrap items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        v-bind:columnData="column"
        v-bind:columnIndex="$columnIndex"
      />
      <input
        type="text"
        class="column m-4 bg-indigo-dark hover:bg-indigo-lighter"
        placeholder="+Add a new Column"
        @keyup.enter="createColumn($event, board.columns)"
      />
    </div>
  </div>
</template>

<script src="./Board.js"></script>
<style src="./Board.css" lang="css"></style>
