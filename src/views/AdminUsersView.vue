<template>
  <div>
    <SideNavbar
        linkBeranda="sidebar-item"
        linkInformasiPengguna="sidebar-item active"
        linkProductMarketplace="sidebar-item"
        linkCategoryMarketplace="sidebar-item"
    ></SideNavbar>
    <div class="text-start content-admin">
      <h2 class="fw-bold mb-5">Halaman Pengguna</h2>
      <h5>Daftar List Pengguna</h5>
      <div class="table mt-4 shadow-lg">
        <div class="row">
          <div class="col-3">
            <p>Nama</p>
          </div>  
          <div class="col-2">
            <p>Role</p>
          </div>
          <div class="col-2">
            <p>Status</p>
          </div>
          <div class="col-2">
            <p>Balance</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p>Maulana Rizki Ilhami</p>
          </div>  
          <div class="col-2">
            <p>Admin</p>
          </div>
          <div class="col-2">
            <p>Verify</p>
          </div>
          <div class="col-2">
            <p>Rp 0</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p>Tedi Hermawaan</p>
          </div>  
          <div class="col-2">
            <p>User</p>
          </div>
          <div class="col-2">
            <p>Not Verify</p>
          </div>
          <div class="col-2">
            <p>Rp 0</p>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import SideNavbar from '@/components/NavSideAdmin.vue'
export default {
    name: "AdminUsersView",
    components:{
        SideNavbar
    }
}
</script>

<style>

</style>