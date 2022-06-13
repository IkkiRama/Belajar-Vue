<template>
  <ul>
    <li v-for="(todo, index) in todosChild" :key="todo">
      <p :class="todo.isDone === true ? 'isDone' : ''">{{ todo.activity }}</p>
      <button
        @click="doneTodo(index)"
        v-text="todo.isDone === true ? 'Un Done' : 'Done'"
      ></button>
      <button @click="deleteTodo(index)">X</button>
    </li>
  </ul>

  <!-- Props -->
  <!-- Mengubah data parent dari child  -->

  <br />


  <br />
</template>
<script>
export default {
  emits: ["deleteTodo", "doneTodo", "asu"],
  props: {
    todosChild: {
      type: Array,
      default: [],
    },
  },


  methods: {
    doneTodo(index) {
      this.$emit("doneTodo", index);
    },
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
  },
};
</script>
