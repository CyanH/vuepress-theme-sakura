<template>
  <div>
    <template v-for="(item,index) in list">
      <router-link
        v-if="item.type === 'sitelink'"
        tag="div"
        :to="item.href"
        class="list-item"
      >
        <svg-icon
          style="margin:0 5px"
          :icon-name="item.icon"
          icon-size="small"
        />
        <span style="padding-left:20px">{{item.title}}</span>
      </router-link>
      <hr
        v-if="item.type === 'hr'"
        class="drawer-hr"
      >
      <el-collapse
        v-if="item.type === 'parent'"
        accordion
      >
        <el-collapse-item>
          <template slot="title">
            <div class="list-item">
              <svg-icon
                style="margin:0 5px"
                :icon-name="item.icon"
                icon-size="small"
              />
              <span style="padding-left:20px">{{item.title}}</span>
            </div>
          </template>
          <a
            v-for="cItem in item.nested"
            class="list-item"
            :href="cItem.href"
          >
            <svg-icon
              style="margin:0 5px"
              :icon-name="cItem.icon"
              icon-size="small"
            />
            <span style="padding-left:20px">{{cItem.title}}</span>
          </a>
        </el-collapse-item>
      </el-collapse>
    </template>
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
  display flex
  align-items center
  padding 12px 16px
  cursor pointer
  font-size 14px

hr
  margin 5px 0
  height 1px
  border none
  background-color #e0e0e0

.el-collapse
  border 0

  >>>.el-collapse-item__header
    border 0

    .list-item
      padding 0 16px
      flex 1

  >>>.el-collapse-item__content
    padding-bottom 0

    a
      padding-left 31px
      color #303133
</style>