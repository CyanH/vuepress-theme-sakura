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
          <div
            class="bg"
            :style="{backgroundImage:`url(${$themeConfig.sidebar.backgroundImage})`}"
          ></div>
          <img
            class="logo"
            :src="$themeConfig.logo"
          >
          <footer class="footer">
            <b>{{$themeConfig.name}}</b>
            <br>{{$themeConfig.description}}</footer>
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
@import '../styles/sidebar'
</style>