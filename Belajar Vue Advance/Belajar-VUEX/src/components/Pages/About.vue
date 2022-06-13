<template>
<h1>Nama Saya Rifki Romadhan</h1>
<h3>Nama saya : {{store.state.User.name}}, dan saya berumur {{getUmur}} tahun</h3>
<h3>Saya sekarang kelas : {{getKelass}}</h3>
<button @click="getCredential">Get Credential</button>
<pre>{{credential}}</pre>

</template>
<script setup>
import {useStore} from 'vuex'
import { computed } from "vue";
const store = useStore()

const getKelass = computed(() => store.getters.getKelas)
const getUmur = computed(() => store.getters.getAge)
const credential = computed(() => store.state.User.credential)

const getCredential= () => store.dispatch("getCredential")
</script>