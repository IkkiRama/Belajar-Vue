<template>
  <h1>Ini adalah Post</h1>

  <h2 v-if="planet.length === 0">Tidak ada planet</h2>
  <p v-else v-for="item in planet" :key="item.name">{{ item.name }}</p>

  <h1>Tabel User</h1>

  <table border="1" cellPadding="10" cellSpacing="0">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="users.length === 0">
        <td colspan="4"><h3>Tidak ada user</h3></td>
      </tr>
      <tr v-else v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>

  <h1>Tabel Todo</h1>

  <input
    type="text"
    v-if="dataUpdate.status"
    v-model="todo"
    @keyup.enter="update(dataUpdate.id)"
  />

  <input v-else type="text" v-model="todo" @keyup.enter="add" />

  <button @click="add">Tambah</button>
  <br />
  <br />

  <table border="1" cellPadding="10" cellSpacing="0">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="todos.length === 0">
        <td colspan="4"><h3>Tidak ada todo</h3></td>
      </tr>

      <tr v-else v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td :class="todo.completed ? 'isDone' : ''">{{ todo.title }}</td>
        <td>
          <button v-if="todo.completed" @click="isDone(todo.id)">
            Un Done
          </button>
          <button v-else @click="isDone(todo.id)">Done</button>
          <button @click="isUpdate(todo.id)">Update</button>
          <button @click="isDelete(todo.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <br />
</template>
<script>
export default {
  emits: ["getUser"],
  props: {
    planet: {
      type: Array,
      default: [],
    },
    users: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      todo: "",
      todos: [],
      dataUpdate: {
        status: false,
        id: 0,
      },
    };
  },

  async mounted() {
    const resTodo = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const dataTodo = await resTodo.json();

    const dataLocal = JSON.parse(localStorage.getItem("todo"));

    if (dataLocal.length !== 0) {
      this.todos = dataLocal;
    } else {
      this.todos = dataTodo;
    }
  },

  methods: {
    add() {
      this.todos.unshift({
        userId: 1,
        id: this.todos.length + 1,
        title: this.todo,
        completed: false,
      });
      this.todo = "";
      this.saveToLocalStorage();
    },
    update(todoId) {
      this.todos.filter((item) => {
        if (item.id === todoId) {
          item.title = this.todo;
          this.saveToLocalStorage();
        }
      });
    },
    isDone(todoId) {
      this.todos.filter((item) => {
        if (item.id == todoId) {
          item.completed = !item.completed;
        }
        return item;
      });
      this.saveToLocalStorage();
    },

    isUpdate(todoId) {
      this.todos.filter((item) => {
        if (item.id === todoId) {
          this.dataUpdate = {
            status: true,
            id: item.id,
          };
          this.todo = item.title;
        }
      });
    },

    isDelete(todoId) {
      this.todos.filter((item) => {
        if (todoId === item.id) {
          this.todos.shift(item);
        }
      });
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem("todo", JSON.stringify(this.todos));
    },
  },
};
</script>
<style></style>
