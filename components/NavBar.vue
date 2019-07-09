<template>
    <header class="navbar">
        <div class="nav-header">
            <router-link :to="$localePath" class="home-link"></router-link>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>


<style lang="stylus" scoped>
@import '../styles/config'
.navbar
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color #fff
  box-sizing border-box
  border-bottom 1px solid rgba(0,0,0,0.25)

.nav-header
  position relative
  padding 0 1rem
  margin 0 auto
  width 100%
  height $navbarHeight
  line-height $navbarHeight
</style>


