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
        <svg-icon
        style="margin:0 5px"
          :icon-name="item.icon"
          icon-size="small"
        />
        <span style="padding-left:20px">{{item.title}}</span>
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
  display flex
  align-items center
  padding 12px 16px
  cursor pointer

hr
  margin 5px 0
  height 1px
  border none
  background-color #e0e0e0
</style>