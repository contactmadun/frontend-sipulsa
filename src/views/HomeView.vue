<template>
  <div>
    <div class="row">
      <div class="col-5">
        <h4 class="text-start mt-4 mb-4">Halo, {{ name }}</h4>
      </div>
    </div>
    <div class="buy-credit-provider shadow p-3 mb-5 bg-body">
      <h6 class="text-start">Saldo</h6>
      <h6 class="text-start fw-bold">Rp. {{ balance }}</h6>
      <hr>
      <form>
        <div class="mb-3">
          <input type="number" class="form-control" id="inputNumber" placeholder="No Tujuan">
        </div>
        <div class="mb-3">
          <input type="number" class="form-control" id="inputNominal" placeholder="Nominal">
        </div>
        <div class="d-grid gap-2 mt-4">
          <button type="submit" class="btn btn-primary" disabled>Isi Pulsa</button>
        </div>
      </form>
    </div>
    <div class="mt-5">
      <div class="row">
        <div class="col-6">
          <h6 class="text-start fw-bold">Marketplace</h6>
        </div>
        <div class="col-6">
          <router-link to="/marketplace"><p class="text-end">Lihat Semua</p></router-link>
        </div>
      </div>
    </div>
    <div class="outer">
      <div class="row marketplace mt-3 mb-5">
        <div class="card-product shadow text-start" v-for="(product, index) in topProduct" :key="index">
          <img :src="product.image" class="card-img" alt="">
          <div class="container mt-3">
            <p class="fw-bold text-truncate">{{ product.name }}</p>
            <p style="margin-top: -10px">Rp {{ product.price_2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
  name: "HomeView",
  data(){
    return{
      topProduct: [],
      session: [],
      name: null,
      balance: null,
      token: null
    }
  },
  methods:{
    async getDataProduct(){
      try {
          const response = await axios.get('product/limit');
          this.topProduct = response.data;
          console.log(this.topProduct);
      } catch (error) {
          console.log(error);
      }
    },
    async refreshToken(){
      try {
          const response = await axios.get('users/token');
          this.token = (response.data.accessToken);
          const decode = jwt_decode(response.data.accessToken);
          console.log(decode.balance);
          this.name = (decode.name);
          this.balance = (decode.balance);
          this.session = decode; 
      } catch (error) {
          console.log(error);
      }
    }
  },
  mounted(){
    this.refreshToken();
    this.getDataProduct();
  }
}
</script>

<style></style>
