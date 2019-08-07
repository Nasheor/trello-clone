export default {
  props: ["columnData", "columnIndex"],
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
    getColumnName() {
      return this.columnData.name;
    },
    createTask(e, tasks) {
      this.$store.commit("CREATE_TASK", {
        tasks,
        name: e.target.value
      });
      e.target.value = "";
    },
    pickupTask(e, taskIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-task-index", taskIndex);
      e.dataTransfer.setData("from-column-index", this.columnIndex);
      e.dataTransfer.setData("type", "task");
      console.log(e)
    },
    moveTask(e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      const fromTaskIndex = e.dataTransfer.getData("from-task-index");
      const fromTasks = this.board.columns[fromColumnIndex].tasks;

      this.$store.commit("MOVE_TASK", {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      });
    },
    moveColumn(e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      this.$store.commit("MOVE_COLUMN", {
        fromColumnIndex,
        toColumnIndex
      });
    },
    dropColumnOrTask(e, toTasks, toTaskIndex) {
      const type = e.dataTransfer.getData("type");
      if (type === "task") {
        this.moveTask(
          e,
          toTasks,
          toTaskIndex !== undefined ? toTaskIndex : toTasks.length
        );
      } else {
        this.moveColumn(e, this.columnIndex);
      }
    }
  }
};
