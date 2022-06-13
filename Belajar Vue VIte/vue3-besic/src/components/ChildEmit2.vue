<template>
    <h1>Update State Parent Dari Child</h1>
    <input type="text" v-model="UpdateValue">
    <h1>Slot Pada Vue</h1>
    <slot />

    <h2>Header</h2>
    <slot name="slotHeader" :dataSlot="header" />
    <br><br>
    <slot :dataSlot="header" />
    <h2>Content</h2>
    <slot name="slotContent" :dataSlot="content" />
    <h2>Footer</h2>
    <slot name="slotFooter" :dataSlot="footer" />


</template>
<script> 
export default{
    data() {
        return {
            header:"Ini adalah Header",
            content:"Ini adalah Content",
            footer:"Ini adalah Footer",
        }
    },
    props:['modelValue'],
    computed:{
     UpdateValue:{
         get(){
            return this.modelValue;
         },
         set(value){
            this.$emit("update:modelValue", value)
         }
     }   
    }
}
</script>