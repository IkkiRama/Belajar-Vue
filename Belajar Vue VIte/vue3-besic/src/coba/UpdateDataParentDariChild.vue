<template>
  <h1>Update Data Parent Dari Child</h1>
  <p>{{ message }}</p>
  <br />

  <Child v-model="message" />

  <br />
  <br />
</template>
<script>
import Child from "../components/coba/UpdateDataParentDariChild.vue";
export default {
  components: { Child },
  data() {
    return {
      message: "a",
    };
  },
};
</script>
<style></style>
