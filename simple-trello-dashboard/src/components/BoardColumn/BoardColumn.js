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
    setPickColumnInfo(e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-column-index", fromColumnIndex);
      e.dataTransfer.setData("type", "column");
    },
    moveColumn(fromColumnIndex, toColumnIndex) {
      this.$store.commit("MOVE_COLUMN", {
        fromColumnIndex,
        toColumnIndex
      });
    },
    dropColumn(e, toColumnIndex) {
      this.moveColumn(
        e.dataTransfer.getData("from-column-index"),
        toColumnIndex
      );
    }
  }
};
