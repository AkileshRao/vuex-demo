<template>
  <div id="app"><Todos /></div>
</template>

<script>
import Todos from "./components/Todos.vue";
export default {
  name: "App",
  components: { Todos },
  mounted() {
    this.$store.dispatch("setTodos");
  },
};
</script>
