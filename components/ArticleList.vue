<template>
  <div>
    <NavBar @toggle-sidebar="toggleSidebar" />
    <div class="content">
      <List />
    </div>
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


<style lang="stylus" scoped></style>
