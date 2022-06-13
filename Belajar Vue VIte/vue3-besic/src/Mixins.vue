<template>
<h1>Mari Belajar Mixins</h1>    
<pre>{{ $data }}</pre>

<button @click="onPress">Click</button>

</template>
<script>
import besic from './Mixins/besic'
import merge from './Mixins/merge'
export default{
    mixins:[besic, merge],
    data() {
            return {
                nama:"Rifki Romadhan"
        }
    },
}

</script>