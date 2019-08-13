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
            :style="{backgroundImage:`url(${backgroundImage})`}"
          ></div>
          <img
            class="logo"
            :src="$themeConfig.logo"
          >
          <footer class="footer">
            <b>{{$themeConfig.name}}</b>
            <br>{{$themeConfig.description}}</footer>
        </div>
        <SidebarLink />
      </div>    
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarOpen: Boolean
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    backgroundImage(){
      const { themeConfig } = this.$site
      if(themeConfig.sidebar.backgroundImage){
        return themeConfig.sidebar.backgroundImage
      }else{
        return '../img/mir.jpg'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/sidebar'
</style>