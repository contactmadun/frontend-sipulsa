<template>
    <div class="text-start">
        <h2 class="mt-5 fw-bold">Halo ini halaman register</h2>
        <p>Cari cuan? mulai dari sini.</p>
        <form class="mt-5">
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Pengguna">
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Alamat Email">
            </div>
            <div class="mb-3 mt-4">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Kata Sandi">
            </div>
            <div class="d-grid gap-2 mt-5">
                <button type="submit" class="btn btn-primary">Daftar</button>
            </div>
            <p class="text-center mt-2">Sudah punya akun?<span><router-link to="/">Masuk Disini</router-link></span></p>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterView",
}
</script>

<style></style>