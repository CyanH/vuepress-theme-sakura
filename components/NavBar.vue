<template>
  <header class="navbar">
    <div class="nav-header">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
      <router-link
        :to="$page"
        class="home-link"
      >
        <span
          class="site-name"
          v-if="$site.themeConfig.name"
        >
          {{ $site.themeConfig.name }}
        </span>
      </router-link>
    </div>
    <div class="nav-background">
      <div
        class="bgImg"
        :style="{backgroundImage:`url(${backgroundImage})`}"
      ></div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    backgroundImage () {
      if (this.$page.frontmatter) {
        return this.$page.frontmatter.backgroundImage
      } else {
        return '../static/img/i_miku.jpg'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-header
  position relative
  color #fff
  padding 0 1rem
  margin 0 auto
  width 100%
  height $navbarHeight
  line-height $navbarHeight
  z-index 2

@media (max-width: $MQMobile)
  .home-link
    display none

.nav-background
  position absolute
  width 100%
  height 400px
  top $navbarHeight
  transition all .45s

  @media (max-width: $MQMobile)
    top 0
    height 270px

  .bgImg
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-repeat repeat
    background-position 50% 50%
    background-size cover
    background-origin padding-box
    background-attachment scroll
</style>