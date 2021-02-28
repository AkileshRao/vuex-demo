<template>
  <div class="todos">
    <form @submit.prevent="addTodo">
      <b-input
        v-model="todo"
        placeholder="Add a task"
        style="width='100%"
      ></b-input>
      <b-button type="is-info" native-type="submit">Add todo</b-button>
    </form>
    <div class="todo-types">
      <div class="incomplete" v-if="incompleteTodos.length > 0">
        Incomplete tasks
        <p
          v-for="todo in incompleteTodos"
          v-bind:key="todo.id"
          class="box todo"
          @click="toggleTodo(todo.id, todo.completed)"
        >
          {{ todo.task }}
        </p>
      </div>
      <div class="complete" v-if="completeTodos.length > 0">
        Complete tasks
        <p
          v-for="todo in completeTodos"
          v-bind:key="todo.id"
          class="box todo"
          @click="toggleTodo(todo.id, todo.completed)"
        >
          {{ todo.task }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      todo: "",
    };
  },
  computed: mapGetters(["todos", "completeTodos", "incompleteTodos"]),
  methods: {
    addTodo() {
      if (!this.todo) return;
      this.$store.dispatch("addTodo", {
        id: this.todos.length + 1,
        task: this.todo,
        completed: false,
      });
      this.todo = "";
    },
    toggleTodo(id, completed) {
      this.$store.dispatch("toggleTodo", {
        id,
        completed: completed == true ? false : true,
      });
    },
  },
};
</script>

<style >
.todos {
  width: 80%;
  margin: 5rem auto;
}

.todo-types {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.incomplete,
.complete {
  width: 100%;
}
.todo {
  padding: 0.5rem !important;
  box-shadow: none !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  width: 100%;
  margin: 0.8rem 0 !important;
}

.todo:hover {
  text-decoration: line-through;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.control {
  width: 100%;
}
</style>
