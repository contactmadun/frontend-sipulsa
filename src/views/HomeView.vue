<template>
  <div>
    <div class="row">
      <div class="col-5">
        <h4 class="text-start mt-4 mb-4">Maulana Rizki Ilhami</h4>
      </div>
    </div>
    <div class="buy-credit-provider shadow p-3 mb-5 bg-body">
      <h6 class="text-start">Saldo</h6>
      <h6 class="text-start fw-bold">Rp.0</h6>
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
        <div class="card-product shadow text-start">
          <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
          <div class="container mt-3">
            <p class="fw-bold">Vgen Handsfree</p>
            <p style="margin-top: -10px">Rp. 22.000</p>
          </div>
        </div>
        <div class="card-product shadow text-start">
          <img src="../assets/img/img_hf_vgen2.jpg" class="card-img" alt="">
          <div class="container mt-3">
            <p class="fw-bold text-truncate">Vgen Handsfree Full Bass Sound</p>
            <p style="margin-top: -10px">Rp. 22.000</p>
          </div>
        </div>
        <div class="card-product shadow text-start">
          <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
          <div class="container mt-3">
            <p class="fw-bold">Vgen Handsfree</p>
            <p style="margin-top: -10px">Rp. 22.000</p>
          </div>
        </div>
        <div class="card-product shadow text-start">
          <img src="../assets/img/img_hf_vgen2.jpg" class="card-img" alt="">
          <div class="container mt-3">
            <p class="fw-bold text-truncate">Vgen Handsfree Full Bass Sound</p>
            <p style="margin-top: -10px">Rp. 22.000</p>
          </div>
        </div>
        <div class="card-product shadow text-start">
          <img src="../assets/img/img_hf_vgen.jpeg" class="card-img" alt="">
          <div class="container mt-3">
            <p class="fw-bold">Vgen Handsfree</p>
            <p style="margin-top: -10px">Rp. 22.000</p>
          </div>
        </div>
        <!-- <div class="card-product text-start">
          <img src="" alt="">
          <p class="fw-bold">Vgen Handsfree</p>
          <p>Handsfree dengan kualitas terbaik</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
}
</script>

<style></style>