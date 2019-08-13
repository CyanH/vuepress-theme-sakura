<template>
  <div>
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <div
        v-if="item.type !== 'hr'"
        class="list-item"
      >
        <svg
          v-if="item.icon.type === 'svg'"
          class="svg"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 1024 1024"
          v-html="item.icon.data"
        />
        <svg-icon icon-class="system" />
        <!-- <i v-else :class="`${item.icon}`" /> -->
        <span>{{item.title}}</span>
      </div>
      <hr
        v-else
        class="drawer-hr"
      >
      </hr>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list () {
      return this.$themeConfig.sidebar.drawer
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-item
  position relative

.svg
  display block
  color rgba(0, 0, 0, .87)
  fill rgb(117, 117, 117)
  height 24px
  width 24px
  user-select none
  transition all 450ms cubic-bezier(.23, 1, .32, 1) 0ms
  position absolute
  top 0px
  margin 12px
  left 4px
</style>