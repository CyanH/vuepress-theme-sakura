<template>
  <div class="site-content">
    <div class="head">
      <img
        class="head-img"
        :src="$themeConfig.logo"
      >
    </div>
    <div class="content-area">
      <main
        class="site-main"
        role="main"
      >
        <h1 class="main-title">
          Discovery
        </h1>
        <router-link
          v-for="(item,index) in posts"
          :key="index"
          :to="item.path"
        >
          <article
            class="post-list-thumb post-list-show"
            :class="{'post-list-thumb-left':index%2==0}"
          >
            <div class="post-thumb">
              <img style="width:100%" :src="item.frontmatter.backgroundImage">
            </div>
            <div
              class="post-content-wrap"
            ></div>
          </article>
        </router-link>
        <Content class="theme-default-content custom"/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  // 时间降序后的博客列表
  computed: {
    posts () {
      let posts = this.$site.pages
      posts = posts.filter(item => {
        const { type, date } = item.frontmatter
        if (type && type == 'post' && date) {
          return item
        }
      })
      // posts.sort((a, b) => {
      //   return this.getTimeNum(b) - this.getTimeNum(a)
      // })
      return posts
    }
  },
  methods: {
    getTimeNum (data) {
      debugger
      return parseInt(new Date(data.frontmatter.date).getTime())
    }
  }
}
</script>


<style lang="stylus" scoped>
.site-content
  position relative
  animation main 1s
  max-width 800px
  padding 0 10px
  margin 0 auto
  z-index 3

  .head
    .head-img
      border-radius 50%
      width 100px
      margin 0 auto
      border 2px solid #fff
      display block

.post-list-show
  animation post-list-show .5s
  opacity 1

.post-list-thumb
  float left
  width 100%
  height 300px
  position relative
  margin 20px 0 20px
  border-radius 10px
  background-color rgba(255, 255, 255, 0)
  box-shadow 0 1px 20px -6px rgba(0, 0, 0, .5)
  // opacity 0
  transition box-shadow .3s ease
</style>
