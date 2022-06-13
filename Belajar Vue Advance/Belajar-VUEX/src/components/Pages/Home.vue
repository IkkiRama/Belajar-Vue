<template>
<h1>Halaman Home</h1>

<button @click="addLike">Add Like</button>
<button @click="decrementLike">Kurang Like</button>
<button @click="setCredential">Change Credential</button>
<br>
<br>
    <input type="text" v-model="state.name" @keyup.enter="setName">
    <button @click="setName">CHANGE NAME</button>


</template>
<script setup>
import {reactive, computed} from 'vue'
import { useStore } from 'vuex';


const state = reactive({
    name : ""
})

const store = useStore();

const addLike = () => store.commit("addLike")
const decrementLike = () => store.commit("decrementLike")
const setName = () => store.commit("setName", state.name)
const setCredential = () => store.dispatch("getCredential")


</script>