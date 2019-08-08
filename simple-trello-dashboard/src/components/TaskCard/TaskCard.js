export default {
  props: ["task", "taskIndex", "columnIndex"],
  data() {
    return {
      isTaskOpen: false
    };
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: "task", params: { id: task.id } });
      this.isTaskOpen = true;
    },
    close() {
      this.$router.push({ name: "board" });
      this.isTaskOpen = false;
    },
    setPickupTaskInfo(e, fromTaskIndex, fromColumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-task-index", fromTaskIndex);
      e.dataTransfer.setData("from-column-index", fromColumnIndex);
      e.dataTransfer.setData("type", "task");
    },
    moveTask(e, toTaskIndex, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      const fromTaskIndex = e.dataTransfer.getData("from-task-index");

      this.$store.commit("MOVE_TASK", {
        fromTaskIndex,
        fromColumnIndex,
        toTaskIndex,
        toColumnIndex
      });
    },
    dropTask(e, toTaskIndex, toColumnIndex) {
      this.moveTask(e, toTaskIndex, toColumnIndex);
    }
  }
};
