<template>
    <div class="text-start">
        <h2 class="mt-5 fw-bold">Selamat datang kembali!</h2>
        <p>Cari cuan? mulai dari sini.</p>
        <div v-show="msg" class="alert alert-danger mt-1" role="alert">{{ msg }}</div>
        <form class="mt-5" @submit.prevent="handleSubmit">
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Alamat Email" v-model="email">
            </div>
            <div class="mb-3 mt-4">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Kata Sandi" v-model="password">
            </div>
            <div class="d-grid gap-2 mt-5">
                <button type="submit" class="btn btn-primary">Masuk</button>
            </div>
            <p class="text-center mt-2">Belum punya akun?<span><router-link to="/register">Daftar Disini</router-link></span></p>
        </form>
        <p class="text-center fixed-bottom">Beta Version</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "LoginView",
    data(){
        return{
            email : '',
            password: '',
            msg: ''
        }
    },
    methods: {
        async handleSubmit(){
            try {
                await axios.post('users/login', {
                    email: this.email,
                    password: this.password 
                }).then((res) => {
                    this.msg = res.data.message;
                });
                if(!this.msg){
                    this.$router.push('/home');
                }
            } catch (error) {
                if(error.response){
                    this.msg = (error.response.data.message);
                }
            }
        }
    }
}
</script>

<style></style>