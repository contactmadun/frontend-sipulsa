<template>
    <div>
        <SideNavbar linkBeranda="sidebar-item" linkInformasiPengguna="sidebar-item"
            linkProductMarketplace="sidebar-item active" linkCategoryMarketplace="sidebar-item"></SideNavbar>
        <div class="text-start content-admin">
            <h2 class="fw-bold mb-5">Marketplace</h2>
            <router-link to="/add-product" class="btn btn-primary mb-5">Tambah Data</router-link>
            <h5>Daftar Produk</h5>
            <div class="table mt-4 shadow-lg">
                <div class="row">
                    <div class="col-2">
                        <p>Nama Produk</p>
                    </div>
                    <div class="col-2">
                        <p>Kategori</p>
                    </div>
                    <div class="col-2">
                        <p>Brand</p>
                    </div>
                    <div class="col-2">
                        <p>Status</p>
                    </div>
                    <div class="col-2">
                        <p>Harga Agen</p>
                    </div>
                    <div class="col-2">
                        <p>Aksi</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <p class="text-truncate">Vgen Handsfreen Bass Full</p>
                    </div>
                    <div class="col-2">
                        <p>Handsfree</p>
                    </div>
                    <div class="col-2">
                        <p>Vgen</p>
                    </div>
                    <div class="col-2">
                        <p>Tersedia</p>
                    </div>
                    <div class="col-2">
                        <p>Rp 22.000</p>
                    </div>
                    <div class="col-2">
                        <div class="row">
                            <div class="col-6">
                                <router-link to="/edit-product" class="fw-bold" style="color: green">Edit</router-link>
                            </div>
                            <div class="col-6">
                                <router-link to="" class="fw-bold" style="color: red">Hapus</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import SideNavbar from '@/components/NavSideAdmin.vue'
export default {
    name: "AdminMarketplaceView",
    components: {
        SideNavbar
    }
}
</script>
  
<style></style>