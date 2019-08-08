import TaskCard from "@/components/TaskCard/TaskCard.vue";

export default {
  components: {
    TaskCard
  },
  props: ["columnData", "columnIndex"],
  methods: {
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
