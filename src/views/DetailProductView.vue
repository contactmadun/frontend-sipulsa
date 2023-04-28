<template>
  <div>
    <div class="product-detail mb-5">
      <img :src="image" class="card-img" alt="">
      <div class="content mt-3 text-start">
        <h6>{{ category }}</h6>
        <h5 class="fw-bold">{{ name }}</h5>
        <h5 style="color: green" class="fw-bold text-capitalize">{{ stok }}</h5>
        <p class="mt-4">Deskripsi</p>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="nav-bottom-product fixed-bottom shadow-lg text-start bg-body">
      <p style="font-size: 14px">Harga</p>
      <h5 style="margin-top: -15px" class="fw-bold">Rp {{ price2 }}</h5>
    </div>
  </div>
</template>

<script>
export default {
    name: "DetailProductView",
    data(){
      return{
        name: '',
        category: '',
        stok: '',
        description: '',
        price2: '',
        image: ''
      }
    },
    methods: {
      getDataProduct(){
        try {
            const response = this.$store.state.dataDetailProduct[0];
            this.name = response[0].name;
            this.category = response[0].Category.name;
            this.stok = response[0].stok;
            this.description = response[0].description;
            this.price2 = response[0].price_2;
            this.image = response[0].image;
        } catch (error) {
            console.log(error);
        }
      }
    },
    mounted(){
      this.getDataProduct();
    }
}
</script>

<style>

</style>