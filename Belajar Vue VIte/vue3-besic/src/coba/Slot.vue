<template>
  <h1>Latihan Slot</h1>

  <br />

  <Slot>
    <template v-slot:satu="{ data }">
      <h1>Nama Saya : {{ data }}</h1>
    </template>

    <template v-slot:dua="{ data }">
      <h1>Saya Kelas : {{ data }}</h1>
    </template>

    <template v-slot:tiga="{ data }">
      <h1>Jurusan Saya : {{ data }}</h1>
    </template>
  </Slot>

  <br />
</template>
<script>
import Slot from "../components/coba/Slot.vue";
export default {
  components: { Slot },
};
</script>
<style></style>
