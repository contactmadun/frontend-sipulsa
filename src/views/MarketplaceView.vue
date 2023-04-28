<template>
  <div>
    <h2 class="text-start mt-2 mb-3">Marketplace</h2>
    <input type="email" class="form-control mb-5" id="exampleInputEmail1" placeholder="Cari Apa?">
        <div class="row mb-5">
            <div class="card-product-marketplace shadow text-start" v-for="(product, index) in products" :key="index">
              <a href="#" @click="getSelectedData(product.id)">
                <img :src="product.image" class="card-img" alt="">
                <div class="container mt-3">
                  <p class="text-truncate">{{ product.Category.name }}</p>
                  <p style="margin-top: -15px" class="fw-bold text-truncate">{{ product.name }}</p>
                  <p style="margin-top: -15px">Rp {{ product.price_2 }}</p>
                  <p style="color: green" class="fw-bold text-capitalize">{{ product.stok }}</p>
                </div>
              </a>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MarketplaceView",
    data(){
      return{
        products: []
      }
    },
    methods:{
      async getSelectedData(id){
        try {
            const response = await axios.post(`product/${id}`);
            this.$store.commit('addDataDetailProduct', response.data);
            this.$router.push('/detail')
        } catch (error) { 
            console.log(error);
        }
      },
      async getDataProduct(){
        try {
            const response = await axios.get('product');
            this.products = response.data;
        } catch (error) {
            console.log(error);
        }
      }
    },
    mounted(){
      this.getDataProduct();
      if(this.$store.state.dataDetailProduct.length){
            window.location.reload();
        }
    }
}
</script>

<style>

</style>