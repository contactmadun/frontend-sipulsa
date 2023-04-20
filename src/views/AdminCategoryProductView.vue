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
                            <form @submit="handleSubmitCategory">
                                <div class="mb-3">
                                    <label for="nameCategory" class="form-label">Nama Kategori Produk</label>
                                    <input type="text" class="form-control" id="nameCategory" v-model="nameCategory">
                                </div>
                                <button type="submit" class="btn btn-primary">Tambah Data</button>
                            </form>
                        </div>
                    </div>
                    <div class="bg-add shadow mt-5">
                        <h5 class="fw-bold">List Kategori</h5>
                        <div class="row mt-4">
                           <div class="col-8">
                            <p>Nama Kategori Produk</p>
                           </div>
                           <div class="col-4">
                            Aksi
                           </div>
                        </div>
                        <div class="row" v-for="(category, index) in dataCategory" :key="index">
                           <div class="col-8">
                            <p>{{ category.name }}</p>
                           </div>
                           <div class="col-4">
                            <button @click="handleDeleteCategory(category.id)" class="btn btn-danger">Hapus</button>
                            <!-- <router-link to="" @click="handleDeleteCategory(category.id)" style="color: red" class="fw-bold">Hapus</router-link> -->
                           </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <h5 class="mb-3">Brand Produk</h5>
                    <div class="bg-add shadow">
                        <h5 class="fw-bold">Tambah Brand</h5>
                        <div class="row mt-4">
                            <form @submit="handleSubmitBrand">
                                <div class="mb-3">
                                    <label for="nameBrand" class="form-label">Nama Brand Produk</label>
                                    <input type="text" class="form-control" id="nameBrand"
                                        aria-describedby="emailHelp" v-model="nameBrand">
                                </div>
                                <button type="submit" class="btn btn-primary">Tambah Data</button>
                            </form>
                        </div>
                    </div>
                    <div class="bg-add shadow mt-5">
                        <h5 class="fw-bold">List Brand</h5>
                        <div class="row mt-4">
                           <div class="col-8">
                            <p>Nama Brand Produk</p>
                           </div>
                           <div class="col-4">
                            Aksi
                           </div>
                        </div>
                        <div class="row" v-for="(brand, index) in dataBrand" :key="index">
                           <div class="col-8">
                            <p>{{ brand.name }}</p>
                           </div>
                           <div class="col-4">
                            <button @click="handleDeleteBrand(brand.id)" class="btn btn-danger">Hapus</button>
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
import axios from 'axios'
export default {
    name: "AdminCategoryProductView",
    components: {
        SideNavbar
    },
    data(){
        return{
            dataBrand: [],
            dataCategory: [],
            nameCategory: "",
            nameBrand: ""
        }
    },
    methods:{
        async getDataBrand(){
            try {
                const response = await axios.get('brand');
                this.dataBrand = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async handleSubmitBrand(){
            try {
                await axios.post('brand',{
                    name: this.nameBrand
                });
            } catch (error) {
                    console.log(error);
            }
        },
        async handleDeleteBrand(id){
            try {
                await axios.delete(`brand/${id}`);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        },
        async getDataCategory(){
            try {
                const response = await axios.get('category');
                this.dataCategory = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async handleSubmitCategory(){
            try {
                await axios.post('category', {
                    name: this.nameCategory
                });
            } catch (error) {
                console.log(error);
            }
        },
        async handleDeleteCategory(id){
            try {
                await axios.delete(`category/${id}`);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.getDataCategory();
        this.getDataBrand();
    }
}
</script>
  
<style></style>