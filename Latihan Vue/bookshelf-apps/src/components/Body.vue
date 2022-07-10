<template>

<div class="container mt-5">
    <div class="row flex justify-content-center">
        <div class="col-8">
            <form action="">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Cari buku...." required>
                    <button class="btn btn-primary input-group-text" @click="cari">Cari</button>
                </div>
            </form>
            <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Tambah Data</button>
        </div>
    </div>

    <div class="book" v-for="book in books" :key="book">
            
        <div class="mt-5" v-if="!book.isCompleted">
            <h1>Buku Belum Dibaca</h1>
            <div class="row flex justify-content-center">
                <div class="" v-if="book.length === 0">
                    <h1 class="text-center">Tidak Ada Buku Disini</h1>
                </div>

                <div v-else v-for="book in books" :key="book" class="card m-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Penulis {{ book.author }}</h6>
                        <p class="card-text">Buku ini diterbitkan pada tahun {{ book.year }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="mt-5" v-else>
            <h1>Buku Sudah Dibaca</h1>
            <div class="row flex justify-content-center">
                <div class="" v-if="books.length === 0">
                    <h1 class="text-center">Tidak Ada Buku Disini</h1>
                </div>

                <div v-else class="card m-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Penulis {{ book.author }}</h6>
                        <p class="card-text">Buku ini diterbitkan pada tahun {{ book.year }}</p>
                    </div>
                </div>
            </div>

        </div>
    
    </div>





    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Tambah Data</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form action="">
                <div class="my-1">
                    <label for="title" class="form-label">Judul</label>
                    <input type="text" class="form-control" id="title" v-model="state.title">
                </div>
                <div class="my-1">
                    <label for="author" class="form-label">Penulis</label>
                    <input type="text" class="form-control" id="author" v-model="state.author">
                </div>

                <div class="my-1">
                    <label for="year" class="form-label">Tahun Pembuatan</label>
                    <input type="number" class="form-control" id="year" v-model="state.year">
                </div>

                <div class="my-1">
                    <label for="check" class="form-label">Sudah Dibaca</label>
                    <input type="checkbox" class="form-check" id="check" v-model="state.isCompleted">
                </div>

                <div class="mt-3">
                    <button class="btn btn-primary" @click="addBook" type="submit">Tambah</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    </div>


</template>
<script setup>
import {reactive, computed} from "vue"
import {Store } from "../Stores"
const state = reactive({
    title: "",
    author: "",
    year: "",
    isCompleted: false
})

const store = new Store()

const books = computed(() => store.books)

const reset = () =>{
    state.title = ""
    state.author = ""
    state.year = ""
    state.isCompleted = false
}

// const renderData = () =>{
//     return books.value.map(book => {
//         return `
//         <div class="card m-4" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title">${book.title}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
//                 <p class="card-text">${book.year}</p>
//                 <a href="#" class="card-link">Card link</a>
//                 <a href="#" class="card-link">Another link</a>
//             </div>
//         </div>
//         `
//     }).join("")
// }

const addBook = (event) => {
    event.preventDefault()
    store.addBook(state.title, state.author, state.year, state.isCompleted)
    reset()
}





// cari() {
//     this.data = this.data.filter(item => {
//         return item.judul.toLowerCase().includes(this.cari.toLowerCase())
//     })
// }

const cari = (event) =>{
    event.preventDefault()
}

</script>