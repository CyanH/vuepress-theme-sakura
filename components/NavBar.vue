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
  </header>
</template>

<style lang="stylus" scoped>
.navbar
  position fixed
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color #fff
  box-sizing border-box

.nav-header
  position relative
  padding 0 1rem
  margin 0 auto
  width 100%
  height $navbarHeight
  line-height $navbarHeight

@media (max-width: $MQMobile)
  .home-link
    display none
</style>