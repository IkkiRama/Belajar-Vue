<template>
  <h1>Kimak</h1>
  <PropsEmitChild
    :coba="coba"
    @okChild="okChilds"
    :cobaDua="cobaDua"
    ref="cobaRef"
  />

  <br />
  <br />
  <button @click="cobaRef">Coba Ref</button>

  <br />
  <br />
  <br />
  <!-- Props -->
  <!-- Mengubah dan menggunakan data parent dari child  -->
  <!-- Menggunakan method parent dari child  -->
</template>
<script>
import PropsEmitChild from "../components/coba/PropsEmitChild.vue";

export default {
  components: { PropsEmitChild },
  data() {
    return {
      coba: "pejuh",
    };
  },

  methods: {
    okChilds() {
      console.log("asu");
    },

    cobaDua() {
      console.log("cobaDua");
    },

    cobaRef() {
      this.$refs.cobaRef.cobaRef();
    },
  },
};
</script>
<style></style>
