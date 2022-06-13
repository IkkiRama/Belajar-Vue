<template>
<h1>Detail Post</h1>

<h3>Title : {{state.post.title}}</h3>
<h3>Body : {{state.post.body}}</h3>




</template>
<script setup>
import axios from 'axios'
import {reactive, onMounted} from 'vue'
import {useRoute} from 'vue-router'

const state = reactive({
    post : []
})

const route = useRoute()
const id = route.params.id

const getPost = async () =>{
    const result = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    state.post = result.data
} 


onMounted(() => getPost())



</script>