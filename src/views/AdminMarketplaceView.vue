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
                <div class="row" v-for="(product, index) in products" :key="index">
                    <div class="col-2">
                        <p class="text-truncate">{{ product.name }}</p>
                    </div>
                    <div class="col-2">
                        <p>{{ product.Category.name }}</p>
                    </div>
                    <div class="col-2">
                        <p>{{ product.Brand.name }}</p>
                    </div>
                    <div class="col-2">
                        <p class="text-capitalize">{{ product.stok }}</p>
                    </div>
                    <div class="col-2">
                        <p>Rp {{ product.price_2 }}</p>
                    </div>
                    <div class="col-2">
                        <div class="row">
                            <div class="col-6">
                                <button @click.prevent="getSelectedData(product.id)" class="btn btn-success">Edit</button>
                            </div>
                            <div class="col-6">
                                <button @click="handleDeleteProduct(product.id)" class="btn btn-danger">Hapus</button>
                                <!-- <router-link to="" class="fw-bold" style="color: red">Hapus</router-link> -->
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
    name: "AdminMarketplaceView",
    components: {
        SideNavbar
    },
    data(){
        return{
            products: [],
            product: null
        }
    },
    methods:{
        async getDataProducts(){
            try {
                const response = await axios.get('product');
                this.products = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getSelectedData(id){
            try {
                const response = await axios.post(`product/${id}`);
                this.$store.commit('addDataProduct', response.data);
                this.$router.push('/edit-product');
            } catch (error) {
                console.log(error);
            }
        },
        async handleDeleteProduct(id){
            try {
                await axios.delete(`product/${id}`);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted(){
        this.getDataProducts();
        if(this.$store.state.dataProduct.length){
            window.location.reload();
        }
    }

}
</script>
  
<style></style>