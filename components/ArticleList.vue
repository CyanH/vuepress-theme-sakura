<template>
<div>
  <NavBar @toggle-sidebar="toggleSidebar" />
  <List />
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


