<template>
    <h1>Daftar Postingan</h1>
    <li v-if="state.posts.length === 0">Tidak Ada Data</li>
    <ul v-for="post in state.posts" :key="post">
        <li><a :href=" `/post/${post.id}` ">{{post.title}}</a></li>
    </ul>


</template>
<script setup>
import axios from 'axios'
import {reactive, onMounted} from 'vue'

const state = reactive({
    posts : []
})

const getPost = async () => {
    let result = await axios.get("http://jsonplaceholder.typicode.com/posts")
    state.posts =  result.data.slice(0,10);
}

onMounted(() => getPost())



</script>