<template>
  <input type="text" v-model="updateValue" />
  <br />

  <br />
</template>
<script>
export default {
  props: ["modelValue"],

  computed: {
    updateValue: {
      get() {
        return this.modelValue;
      },

      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
<style></style>
