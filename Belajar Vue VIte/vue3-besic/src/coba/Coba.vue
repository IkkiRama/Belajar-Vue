<template>
  <h1 v-once v-text="nama"></h1>

  <input type="text" @keyup.enter="add" v-model="todo" />

  <Coba
    :todosChild="todos"
    @deleteTodo="deleteTodo"
    @doneTodo="done"
  />

  <h3>Total Todo : {{ totalTodo }}</h3>

  <hr />
  <br />
  <br />
  <h1 v-text="nama"></h1>
  <input type="text" v-model="nama" />

  <br />

  <br />
</template>
<script>
import Coba from "./components/ChildCoba.vue";
export default {
  components: { Coba },
  data() {
    return {
      nama: "Rifki Romadhan",
      todo: "",
      todos: [],
    };
  },

  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todo"));
  },

  computed: {
    totalTodo() {
      return this.todos.length;
    },
  },

  methods: {
    add() {
      this.todos.unshift({
        activity: this.todo,
        isDone: false,
      });

      this.todo = "";
      this.saveToLocalStorage();
    },

    done(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        if (index == todoIndex) {
          item.isDone = !item.isDone;
        }

        this.saveToLocalStorage();
        return item;
      });
    },

    deleteTodo(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        if (index != todoIndex) {
          this.saveToLocalStorage();
          return item;
        }
      });
    },

    saveToLocalStorage() {
      localStorage.setItem("todo", JSON.stringify(this.todos));
    },
  },
};
</script>
<style>
* {
  font-family: sans-serif;
}

.isDone {
  text-decoration: line-through;
}
</style>
