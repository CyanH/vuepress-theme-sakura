<template>
  <div class="sidebar">
    <transition
      name="fade"
      @touchmove.stop.prevent
    >
      <div
        class="menu-mask"
        v-show="isSidebarOpen"
        @click="$emit('update:isSidebarOpen', false)"
      ></div>
    </transition>
    <transition name="slide-fade">
      <div
        class="side-content"
        v-show="isSidebarOpen"
      >
        <div class="side-hander">
          <div class="bg" :style="{backgroundImage:`url(${$withBase($themeConfig.logo)})`}"></div>
        </div>
      </div>    
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarOpen: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.menu-mask
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index 10
  background rgba(0, 0, 0, .5)

.side-content
  z-index 11
  position fixed
  width 250px
  height 100%
  background #fff

.fade-enter-to, .fade-leave-to
  transition opacity .3s

.fade-enter, .fade-leave-to
  opacity 0

.slide-fade-enter-to, .slide-fade-leave-to
  transition transform .3s
  transform translate(0px, 0px)

.slide-fade-enter, .slide-fade-leave-to
  opacity 0
  -webkit-transform translate(-286px, 0px)
  transform translate(-286px, 0px)
  -webkit-transition opacity .3s ease-in-out .3s, -webkit-transform .3s ease-in-out
  transition opacity .3s ease-in-out .3s, transform .3s ease-in-out

.side-hander
  padding 40px 20px 16px
</style>