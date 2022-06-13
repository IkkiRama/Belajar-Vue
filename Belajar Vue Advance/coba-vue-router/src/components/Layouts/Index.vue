<template>
<h1>Belajar Vue Router</h1>

<router-link to="/">Home | </router-link>
<router-link to="/contact"> Contact | </router-link>
<router-link :to="{name:'About'}"> About | </router-link>
<router-link :to="{name:'Posts'}"> Post | </router-link>

<button @click="logout">Logout</button>


<br>
<br>
<hr>
<br>
<br>

<main>
    <router-view />
</main>

</template>
<script setup>
import {useRouter} from 'vue-router'
    const router = useRouter()
const logout = () =>{
    localStorage.setItem("auth", false)
    router.push({name : "Login"})
}

</script>