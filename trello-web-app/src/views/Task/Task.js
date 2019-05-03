import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      // eslint-disable-next-line
      return this.getTask(this.$route.params.id);
    }
  }
};
