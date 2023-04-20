<template>
    <div class="text-start">
        <h2 class="mt-5 fw-bold">Halo ini halaman register</h2>
        <p>Cari cuan? mulai dari sini.</p>
        <div v-show="msg" class="alert alert-primary" role="alert">{{ msg }}</div>
        <form @submit.prevent="handleSubmit" class="mt-5">
            <div class="mb-3">
                <input type="text" class="form-control" id="name" placeholder="Nama Pengguna" v-model="username">
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Alamat Email" v-model="email">
            </div>
            <div class="mb-3 mt-4">
                <input type="password" class="form-control" id="password" placeholder="Kata Sandi" v-model="password">
            </div>
            <div class="d-grid gap-2 mt-5">
                <button type="submit" class="btn btn-primary">Daftar</button>
            </div>
            <p class="text-center mt-2">Sudah punya akun?<span><router-link to="/">Masuk Disini</router-link></span></p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "RegisterView",
    data(){
        return{
            username: '',
            email: '',
            password: '',
            msg: ''
        }
    },
    methods: {
        async handleSubmit(){
            try {
                await axios.post('users', {
                    name: this.username,
                    email: this.email,
                    password: this.password,
                    role: 'user',
                    balance: 0
                }).then((res) => {
                    this.msg = res.data.message;
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style></style>