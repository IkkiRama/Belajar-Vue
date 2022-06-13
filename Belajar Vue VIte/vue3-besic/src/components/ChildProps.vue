<template>

<p>{{ message }}</p>
<p>{{ number }}</p>


</template>
<script setup>
defineProps({
    message:String,
    number:{
        type:Number,
        default:0
    }
})
</script>