<template>
<h1>{{message}}</h1>
<hr>

<Child v-model="message">

    <template v-slot:default="{dataSlot}">
        <span>anjay : {{ dataSlot }}</span>
    </template> 

    
    <template v-slot:slotHeader="{dataSlot}">
        <span>Slot Heaeder : {{ dataSlot }}</span>
    </template>

    
    <template v-slot:slotContent="{dataSlot}">
        <span>Slot Content : {{ dataSlot }}</span>
    </template>

    
    <template v-slot:slotFooter="{dataSlot}">
        <span>Slot Footer : {{ dataSlot }}</span>
    </template>
    
</Child>


<h1>Child Props</h1>
<ChildProps  />
<ChildProps message="asu" />
<ChildProps message="kimak" :number="100" />
<ChildProps :message="kimak" number="100" />

</template>
<script>

 
export default{
    data() {
        return {
            message: ""
        }
    }
}

</script>