<template>
<h1>Footer</h1>

<button @click="increment">Add Number</button>
<button @click="decrement">Kurang Number</button>
<button @click="reset">Reset</button>

<br>
<hr>
<br>

<button @click="incrementFromActions">Add Number From Actions</button>
<button @click="decrementFromActions">Kurang Number From Actions</button>
<button @click="resetFromActions">Reset From Actions</button>
<button @click="incrementByWithActions">Increment By From Actions</button>
<button @click="decrementByWithActions">Decrement By From Actions</button>


<br>
<hr>
<br>


<input type="text" v-model="state.pokemon">
<button @click="fetchPokemon(state.pokemon)">Get Pokemon</button>

<pre>
    {{ pokemon }}
</pre>

</template>
<script setup>
import {computed, reactive} from 'vue';
import {Store} from "../Stores/Counter"

const state = reactive({
    pokemon: '',
})

const store = Store()
const increment = () => {
    store.$patch((state) => {
        state.count++
    })
}
const decrement = () => {
    store.$patch((state) => {
        state.count--
    })
}


const reset = () => store.$reset()


store.$subscribe((mutation, state) => {
    console.log(mutation, state)
})



const incrementFromActions = () => store.increment()
const decrementFromActions = () => store.decrement()
const resetFromActions = () => store.reset()
const incrementByWithActions = (num) => store.incrementBy(2)
const decrementByWithActions = (num) => store.decrementBy(2)


const pokemon = computed(() => store.pokemon)
const fetchPokemon = (name) => store.fetchPokemon(name)

</script>