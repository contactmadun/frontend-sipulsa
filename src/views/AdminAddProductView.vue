<template>
    <div>
        <SideNavbar linkBeranda="sidebar-item" linkInformasiPengguna="sidebar-item"
            linkProductMarketplace="sidebar-item active" linkCategoryMarketplace="sidebar-item"></SideNavbar>
        <div class="text-start content-admin">
            <h2 class="fw-bold mb-5">Tambah Data Produk</h2>
            <form @submit.prevent="onUpload" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="nameProduk" class="form-label">Nama Produk</label>
                    <input type="text" class="form-control" id="nameProduk" placeholder="Vivan Ligthning Data Cable BTK-L" v-model="nameProduct">
                </div>
                <select class="form-select mb-3" aria-label="Default select example" v-model="idCategory">
                    <option selected>Pilih Kategori Produk</option>
                    <option v-for="(data, index) in category" :key="index" :value=data.id>{{ data.name }}</option>
                </select>
                <select class="form-select mb-3" aria-label="Default select example" v-model="idBrand">
                    <option selected>Pilih Brand Produk</option>
                    <option v-for="(data, index) in brand" :key="index" :value=data.id>{{ data.name }}</option>
                </select>
                <select class="form-select mb-3" aria-label="Default select example" v-model="status">
                    <option selected>Status Stok</option>
                    <option value="tersedia">Tersedia</option>
                    <option value="habis">Habis</option>
                </select>
                <div class="mb-3">
                    <label for="price1" class="form-label">Harga Modal Produk</label>
                    <input type="number" class="form-control" id="price1" placeholder="Harga Modal" v-model="price1">
                </div>
                <div class="mb-3">
                    <label for="price2" class="form-label">Harga Agen Produk</label>
                    <input type="number" class="form-control" id="price2" placeholder="Harga Agen" v-model="price2">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Deskripsi</label>
                    <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Gambar Produk</label>
                    <input class="form-control" type="file" @change="onSelectedFile" id="formFile">
                </div>
                <button type="submit" class="btn btn-primary">Tambah Data</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import SideNavbar from '@/components/NavSideAdmin.vue'
import axios from 'axios'

export default {
    name: "AdminAddProductView",    
    components: {
        SideNavbar
    },
    data(){
        return{
            brand: [],
            category: [],
            nameProduct: '',
            idCategory: 'Pilih Kategori Produk',
            idBrand: 'Pilih Brand Produk',
            status:'Status Stok',
            price1: '',
            price2: '',
            description: '',
            selectedFiles: null
        }
    },
    methods:{
        onSelectedFile(event){
            this.selectedFiles = event.target.files[0];
        },
        async onUpload(){
            const formData = new FormData();
            formData.append('categoryId', this.idCategory);
            formData.append('brandId', this.idBrand);
            formData.append('name', this.nameProduct); 
            formData.append('stok', this.status);
            formData.append('price1', this.price1);
            formData.append('price2', this.price2);
            formData.append('description', this.description);
            formData.append('image', this.selectedFiles);    
            try{
                await axios.post('/product', formData);
                this.$router.push('/admin');
            } catch(err){
                console.log(err);
            }
        },
        async getDataBrand(){
            try {
                const response = await axios.get('brand');
                this.brand = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getDataCategory(){
            try {
                const response = await axios.get('category');
                this.category = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.getDataBrand();
        this.getDataCategory();
    }
}
</script>
  
<style></style>