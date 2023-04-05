<template>
  <div>
    <SideNavbar
        linkBeranda="sidebar-item"
        linkInformasiPengguna="sidebar-item active"
        linkProductMarketplace="sidebar-item"
        ></SideNavbar>  
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