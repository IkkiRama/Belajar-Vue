<template>
<h1>Belajar Suspense</h1>

<suspense>
  <template #default>
    <SuspenseChild />
  </template>
  <template #fallback>
    <p>Loading.....</p>
  </template>
      
</suspense>

</template>
<script setup>
import SuspenseChild from './components/Suspense.vue'



</script>
