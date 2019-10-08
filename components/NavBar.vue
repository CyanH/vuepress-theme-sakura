<template>
  <div>
    <div class="nav-header">
      <div class="header">
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
    </div>
    <div>
      <div class="nav-background">
        <div
          class="bgImg"
          :style="{backgroundImage:`url(${backgroundImage})`}"
        ></div>
      </div>
    </div>
    <div class="head">
      <img
        class="head-img"
        :src="$themeConfig.logo"
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    backgroundImage () {
      if (this.$page.frontmatter) {
        return this.$page.frontmatter.backgroundImage
      } else {
        return '/img/i_miku.jpg'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-header
  position fixed
  top 0
  width 100%
  z-index 10

  .header
    position relative
    padding 10px

    @media (max-width: $MQMobile)
      .home-link
        display none

    .site-name
      height 54px
      line-height 24px
      font-size 28px
      opacity 1
      background-color rgba(0, 0, 0, 0)
      text-shadow 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF

.nav-background
  position absolute
  top 0
  opacity 0
  width 100%
  transition all .45s

  @media (max-width: $MQMobile)
    opacity 1
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

.head
  position relative
  padding-top 220px
  z-index 1

  .head-img
    border-radius 50%
    width 100px
    margin 0 auto
    border 2px solid #fff
    display block
</style>