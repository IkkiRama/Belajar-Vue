<template>
  <h1>{{ coba }}</h1>

  <input type="text" v-model="coba" />

  <button @click="okChild">OK Child</button>
  <br />
  <button @click="cobaDua">cobaDua</button>
  <br />
  <br />
  <br />
</template>
<script>
export default {
  emits: ["okChild"],
  props: {
    coba: {
      type: String,
      default: "Ini Ditulis dari child",
    },
    cobaDua: {
      type: String,
      default: "aaa",
    },
  },

  methods: {
    okChild() {
      this.$emit("okChild");
    },

    cobaRef() {
      console.log("coba Refff");
    },
  },
};
</script>
<style></style>
