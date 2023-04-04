<template>
  <div>
    <h2 class="text-start mt-2 mb-3">Marketplace</h2>
    <input type="email" class="form-control mb-5" id="exampleInputEmail1" placeholder="Cari Apa?">
        <div class="row mb-5">
            <div class="card-product-marketplace shadow text-start">
                <router-link to="/detail">
                    <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
                    <div class="container mt-3">
                      <p>Kabel Data</p>
                      <p style="margin-top: -15px" class="fw-bold">Vgen Handsfree</p>
                      <p style="margin-top: -15px">Rp. 22.000</p>
                      <p style="color: green" class="fw-bold">Tersedia</p>
                    </div>
                </router-link>
            </div>
            <div class="card-product-marketplace shadow text-start">
              <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
              <div class="container mt-3">
                <p>Kabel Data</p>
                <p style="margin-top: -15px" class="fw-bold">Vgen Handsfree</p>
                <p style="margin-top: -15px">Rp. 22.000</p>
                <p style="color: red" class="fw-bold">Kosong</p>
              </div>
            </div>
            <div class="card-product-marketplace shadow text-start">
              <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
              <div class="container mt-3">
                <p>Kabel Data</p>
                <p style="margin-top: -15px" class="fw-bold">Vgen Handsfree</p>
                <p style="margin-top: -15px">Rp. 22.000</p>
                <p style="color: green" class="fw-bold">Tersedia</p>
              </div>
            </div>
            <div class="card-product-marketplace shadow text-start">
              <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
              <div class="container mt-3">
                <p>Kabel Data</p>
                <p style="margin-top: -15px" class="fw-bold">Vgen Handsfree</p>
                <p style="margin-top: -15px">Rp. 22.000</p>
                <p style="color: green" class="fw-bold">Tersedia</p>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "MarketplaceView"
}
</script>

<style>

</style>