<template>
  <div>
    <LayoutContainer @toggle-sidebar="toggleSidebar" />
    <SideBar :isSidebarOpen.sync="isSidebarOpen"></SideBar>
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
  },
  methods: {
    toggleSidebar () {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>
