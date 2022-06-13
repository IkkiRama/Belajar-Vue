

 <template>
  <slot />

  <br />
  <h2>Child Component</h2>

  <slot name="satu" :data="nama" />
  <slot name="dua" :data="kelas" />
  <slot name="tiga" :data="jurusan" />

  <br />
  <br />
</template>
<script>
export default {
  data() {
    return {
      nama: "Rifki Romadhan",
      kelas: "XII RPL 1",
      jurusan: "RPL",
    };
  },
};
</script>
<style></style>