<template>
  <header class="navbar">
    <div class="nav-header">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
      <router-link
        :to="$localePath"
        class="home-link"
      >
        <img
          class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
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
      <div class="bgImg" :style="{backgroundImage:`url(${data.heroImage})`}"></div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
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
  z-index 1

@media (max-width: $MQMobile)
  .home-link
    display none

.nav-background
  position absolute
  width 100%
  height 270px
  top 0

  .bgImg
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-origin: padding-box;
    background-attachment: scroll;
    transition: all .45s;
</style>