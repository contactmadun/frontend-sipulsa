<template>
  <div>
    <SideNavbar linkBeranda="sidebar-item" linkInformasiPengguna="sidebar-item active"
      linkProductMarketplace="sidebar-item" linkCategoryMarketplace="sidebar-item"></SideNavbar>
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
            <p>Balance</p>
          </div>
        </div>
        <div class="row" v-for="(user, index) in data" :key="index">
          <div class="col-3">
            <p>{{ user.name }}</p>
          </div>
          <div class="col-2">
            <p>{{ user.role }}</p>
          </div>
          <div class="col-2">
            <p>Rp {{ user.balance }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/NavSideAdmin.vue'
import axios from 'axios';

export default {
  name: "AdminUsersView",
  components: {
    SideNavbar
  },
  data() {
    return {
      data: [],
    }
  },
  methods: {
    async getDataUsers() {
      try {
        const users = await axios.get('users');
        this.data = users.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getDataUsers();
  }
}
</script>

<style></style>