<template>
    <h4>{{text}}</h4>
    <h4>{{coba}}</h4>
    <p>Ini adalah child component</p>
</template>
<script setup>
defineProps({
  text:String, 
  coba:{
      type:String,
      default:"Rifki"
  }
})
</script> 