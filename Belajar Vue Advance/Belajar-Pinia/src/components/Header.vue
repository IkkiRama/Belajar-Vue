<template>
<h1>Header</h1>
<pre>Counter : {{ counter }}</pre>
<pre>Getter : {{ getCounter }}</pre>
<pre>Double Count: {{ doubleCount }}</pre>
<pre>devidedByTwo : {{ devidedByTwo }}</pre>
<pre>devidedByFour : {{ devidedByFour }}</pre>
<pre>mutipleBy : {{ mutipleByTwo }}</pre>
</template>
<script setup>
import {computed} from 'vue';
import {Store} from "../Stores/Counter"

const store = Store()
const counter = computed(()=> store.count)
const getCounter = computed(()=> store.getCount)
const doubleCount = computed(()=> store.doubleCount)
const devidedByTwo = computed(()=> store.devidedBy(2))
const devidedByFour = computed(()=> store.devidedBy(4))
const mutipleByTwo = computed(()=> store.mutipleBy(2))

</script>