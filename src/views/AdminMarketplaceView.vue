<template>
    <div>
      <SideNavbar
          linkBeranda="sidebar-item"
          linkInformasiPengguna="sidebar-item"
          linkProductMarketplace="sidebar-item active"
          ></SideNavbar>  
    </div>
  </template>
  
  <script>
  import SideNavbar from '@/components/NavSideAdmin.vue'
  export default {
      name: "AdminMarketplaceView",
      components:{
          SideNavbar
      }
  }
  </script>
  
  <style>
  
  </style>