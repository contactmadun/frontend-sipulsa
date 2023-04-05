<template>
    <div>
        <SideNavbar
        linkBeranda="sidebar-item active"
        linkInformasiPengguna="sidebar-item"
        linkProductMarketplace="sidebar-item"
        linkCategoryMarketplace="sidebar-item"
        ></SideNavbar>    
    </div>
</template>

<script>
import SideNavbar from '@/components/NavSideAdmin.vue'

export default {
    name: "AdminDashboardView",
    components:{
        SideNavbar
    }
}
</script>

<style></style>