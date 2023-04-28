<template>
    <div>
        <SideNavbar linkBeranda="sidebar-item" linkInformasiPengguna="sidebar-item"
            linkProductMarketplace="sidebar-item active" linkCategoryMarketplace="sidebar-item"></SideNavbar>
        <div class="text-start content-admin">
            <h2 class="fw-bold mb-5">Edit Data Produk</h2>
            <form @submit.prevent="updateDataProduct(id)" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama Produk</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                        :value="name" @input="name = $event.target.value">
                </div>
                <select class="form-select mb-3" aria-label="Default select example" v-model="idCategory">
                    <option selected>Pilih Kategori Produk</option>
                    <option v-for="(data, index) in category" :key="index" :value=data.id>{{ data.name }}</option>
                </select>
                <select class="form-select mb-3" aria-label="Default select example" v-model="idBrand">
                    <option selected>Pilih Brand Produk</option>
                    <option v-for="(data, index) in brand" :key="index" :value=data.id>{{ data.name }}</option>
                </select>
                <select class="form-select mb-3" aria-label="Default select example" v-model="stok">
                    <option selected>Status Stok</option>
                    <option value="tersedia">Tersedia</option>
                    <option value="habis">Habis</option>
                </select>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Harga Modal Produk</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Harga Modal"
                        :value="price1"  @input="price1 = $event.target.value">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Harga Agen Produk</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Harga Agen"
                        :value="price2"  @input="price2 = $event.target.value">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :value="desc"  @input="desc = $event.target.value"></textarea>
                </div>
                <!-- <div class="mb-3">
                    <label for="formFile" class="form-label">Gambar Produk</label>
                    <input class="form-control" type="file" id="formFile">
                </div> -->
                <button type="submit" class="btn btn-primary">Update Data</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import SideNavbar from '@/components/NavSideAdmin.vue'
import axios from 'axios'

export default {
    name: "AdminEditProductView",
    components: {
        SideNavbar
    },
    data() {
        return {
            id: '',
            name: '',
            brand: [],
            category: [],
            price1: '',
            price2: '',
            desc: '',
            idCategory: 'Pilih Kategori Produk',
            idBrand: 'Pilih Brand Produk',
            stok:'Status Stok',
        }
    },
    methods: {
        async updateDataProduct(id) {
            const formData = new FormData();
            formData.append('categoryId', this.idCategory);
            formData.append('brandId', this.idBrand);
            formData.append('name', this.name);
            formData.append('stok', this.stok);
            formData.append('price1', this.price1);
            formData.append('price2', this.price2);
            formData.append('description', this.desc);
            try {
                await axios.put(`product/${id}`, formData);
                this.$router.push('/admin');
            } catch (error) {
                console.log(error);
            }
        },
        getDataProduct() {
            try {
                const response = this.$store.state.dataProduct[0];
                this.id = response[0].id;
                this.name = response[0].name;
                this.price1 = response[0].price_1;
                this.price2 = response[0].price_2;
                this.desc = response[0].description;
                // console.log(this.name);
            } catch (error) {
                console.log(error);
            }
        },
        async getDataBrand() {
            try {
                const response = await axios.get('brand');
                this.brand = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getDataCategory() {
            try {
                const response = await axios.get('category');
                this.category = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getDataProduct();
        this.getDataBrand();
        this.getDataCategory();
    }

}
</script>
  
<style></style>