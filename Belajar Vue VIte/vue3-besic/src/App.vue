<template>

<h1>{{nama}}</h1>
<p :title="nama" v-text="nama"></p>
<h4>{{count}}</h4>
<button @click="count++">Count 1</button>
<button @click="addcount">Count 2</button>

<hr>
<br><br>
<br><br>

<h1 v-once v-text="nama"></h1>
<input type="text" v-model="nama">
<input :value="nama" @input="nama = $event.target.value">


<hr>
<br><br>
<br><br>


<h1>Kondisi</h1>
<p v-if="status">True</p>
<p v-else>False</p>
<button @click="status === true ? status = false : status = true ">Toggle</button>
<button @click="status = !status ">Toggle</button>


<hr>
<br><br>
<br><br>


<h1>Looping</h1>
<p v-for="(todo, index) in todos" :key="todo.id" v-text="index+1  +' - '+ todo.activity"></p>



<hr>
<br><br>
<br><br>



<h1>Component</h1>
<p>Ini adalah parent component</p>
<ChildComponent text="anjay" />
<ChildComponent coba="asi" />
<ChildComponent text="Namanya" :coba="nama" />


<hr>
<br><br>
<br><br>

<h1>Computed Property</h1>
<input type="text" v-model="num1">
<input type="text" v-model="num2">

<h3>Hasil : {{ getHasil }}</h3>
<h3>Hasil : {{ discount }}</h3>
<button @click="addDiscount">+ Discount</button>

<hr>
<br><br>
<br><br>

<ChildComponent v-for="ar in array" :key="ar" :text="ar" />

<hr>
<br><br>
<br><br>

<h1>Watcher</h1>
<h1>{{ message }}</h1>
<input type="text" v-model="message">


<hr>
<br><br>
<br><br>

<h1>Dynamic Class</h1>
<p :class="status ? ['green', 'bold', 'besar'] : ['red', 'kecil'] ">Status</p>
<button @click="status = !status">CHANGE !</button>

<hr>
<br><br>
<br><br>
 

</template>
<script>
import ChildComponent from './components/ChildComponent.vue';
export default{
  components:{
    ChildComponent 
  },


data(){
  return{
    nama : "Rifki Romadhan",
    count:0,
    status:false,
    todos: [
      {id:1, activity:"Menyapu"},
      {id:2, activity:"Mengepel"},
      {id:3, activity:"Mandi"},
      {id:3, activity:"Ngoding"}
    ],
    array: ["pertama", "Kedua", "Ketiga", "Keempat"],

    num1:0,
    num2:0,
    message:"Hallo Rifki"
  }
},

methods:{
  addcount(){
    this.count+=2
  },

  addDiscount(){
    this.discount = 500;
  }
},

computed:{
  getHasil(){
    return (parseInt(this.num1) + parseInt(this.num2)) % 2 === 0 ? "Genap" : "Ganjil"
  },

  discount : {
    get(){
      return parseInt(this.num1) + parseInt(this.num2)
    }, 
    set(value){ 
      this.num1 -= value;
      this.num2 -= value;

    }
  }
},

watch:{
  message(value){
    console.log("Perubahan terjadi di message : " + value);
  }
}


}
</script>

<style>
.green{
  color: green;
}

.red{
color:red;
}

.bold{
  font-weight: 700;
}

.kecil{
  font-size: 20px;
}

.besar{
  font-size: 40px;
}


</style>







