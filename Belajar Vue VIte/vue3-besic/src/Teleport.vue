<template>

<teleport to='#target-teleport'>
    <h1>{{data}}</h1>
</teleport>
<h1>{{data1}}</h1>


</template>
<script>
export default{
    data() {
        return {
            data:"Hai, tulian ini di teleport",
            data1:"Hai, tulian ini bukan di teleport"
        }
    },
}
</script>