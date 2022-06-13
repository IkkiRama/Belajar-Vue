<template>
  <h1>Belajar Keep Alive</h1>
  <button
    v-for="item in tabs"
    :key="item"
    :class="['btn', { isActive: item === tab }]"
    v-text="item"
    @click="tab = item"
  ></button>

  <br />
  <br />

  
  <button @click="getUser">Tampilkan User</button>
  <br />
  <br />

  <keep-alive>
    <component :is="tab" :planet="planet" :users="users"></component>
  </keep-alive>

  <br />
  <br />

  <br />
</template>
<script>
import Home from "../components/coba/Home.vue";
import Post from "../components/coba/Post.vue";
import About from "../components/coba/About.vue";
export default {
  components: {
    Home,
    Post,
    About,
  },

  data() {
    return {
      tab: "Home",
      tabs: ["Home", "Post", "About"],
      planet: [],
      users: [],
    };
  },

  async mounted() {
    const res = await fetch("https://swapi.dev/api/planets");
    const { results } = await res.json();
    this.planet = results;
  },

  methods: {
    async getUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      this.users = data;
    },
  },
};
</script>
<style>
* {
  font-family: sans-serif;
}

.btn {
  padding: 10px 25px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 1.1rem;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;
}

.isActive {
  background-color: black;
  color: #fff;
  border: 3px solid #eee;
}

.isDone {
  text-decoration: line-through;
}
</style>
