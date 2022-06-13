<template>
  <h1>Keep Alive</h1>
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['btn', { isActive: currentTab === tab }]"
    @click="currentTab = tab"
    v-text="tab"
  ></button>

  <keep-alive>
    <component :is="currentTab" />
  </keep-alive>
</template>
<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Post from "./components/Post.vue";

export default {
  components: { Home, About, Post },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "About", "Post"],
    };
  },

  compouted: {},
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
</style>
