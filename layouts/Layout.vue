<template>
  <div>
    <LayoutContainer @toggle-sidebar="toggleSidebar" />
    <!-- <SideBar></SideBar> -->
    <MyFooter></MyFooter>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSidebarOpen: false
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  }
}
</script>
