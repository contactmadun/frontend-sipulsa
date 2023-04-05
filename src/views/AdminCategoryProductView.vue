<template>
    <div>
        <SideNavbar linkBeranda="sidebar-item" linkInformasiPengguna="sidebar-item" linkProductMarketplace="sidebar-item"
            linkCategoryMarketplace="sidebar-item active"></SideNavbar>
        <div class="text-start content-admin">
            <h2 class="fw-bold mb-5">Kategori dan Brand Produk</h2>
            <div class="row conten-admin">
                <div class="col-6">
                    <h5 class="mb-3">Kategori Produk</h5>
                    <div class="bg-add shadow">
                        <h5 class="fw-bold">Tambah Kategori</h5>
                        <div class="row mt-4">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nama Kategori Produk</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <button type="submit" class="btn btn-primary">Tambah Data</button>
                            </form>
                        </div>
                    </div>
                    <div class="bg-add shadow mt-5">
                        <h5 class="fw-bold">List Kategori</h5>
                        <div class="row mt-4">
                           <div class="col-6">
                            <p>Nama Kategori Produk</p>
                           </div>
                           <div class="col-6">
                            Aksi
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-6">
                            <p>Kabel Data</p>
                           </div>
                           <div class="col-6">
                            <router-link to="" style="color: red" class="fw-bold">Hapus</router-link>
                           </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <h5 class="mb-3">Brand Produk</h5>
                    <div class="bg-add shadow">
                        <h5 class="fw-bold">Tambah Brand</h5>
                        <div class="row mt-4">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nama Brand Produk</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <button type="submit" class="btn btn-primary">Tambah Data</button>
                            </form>
                        </div>
                    </div>
                    <div class="bg-add shadow mt-5">
                        <h5 class="fw-bold">List Brand</h5>
                        <div class="row mt-4">
                           <div class="col-6">
                            <p>Nama Brand Produk</p>
                           </div>
                           <div class="col-6">
                            Aksi
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-6">
                            <p>Robot</p>
                           </div>
                           <div class="col-6">
                            <router-link to="" style="color: red" class="fw-bold">Hapus</router-link>
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
    name: "AdminCategoryProductView",
    components: {
        SideNavbar
    }
}
</script>
  
<style></style>