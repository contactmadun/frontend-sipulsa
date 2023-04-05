<template>
    <div>
        <SideNavbar linkBeranda="sidebar-item" linkInformasiPengguna="sidebar-item"
            linkProductMarketplace="sidebar-item active" linkCategoryMarketplace="sidebar-item"></SideNavbar>
        <div class="text-start content-admin">
            <h2 class="fw-bold mb-5">Edit Data Produk</h2>
            <form action="">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama Produk</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Vgen Data Cable</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Pilih Brand Produk</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Status Stok</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Harga Modal Produk</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Harga Modal">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Harga Agen Produk</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Harga Agen">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Gambar Produk</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
                <button type="submit" class="btn btn-primary">Tambah Data</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import SideNavbar from '@/components/NavSideAdmin.vue'
export default {
    name: "AdminEditProductView",
    components: {
        SideNavbar
    }
}
</script>
  
<style></style>