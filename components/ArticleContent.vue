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
        >
          <article
            class="post-list-thumb"
            :class="{'post-list-thumb-left':index%2==0}"
          >
            <div class="post-thumb">{{item.name}}</div>
            <div class="post-content-wrap" v-html="item.excerpt"></div>
          </article>
        </router-link>
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
        if(type && type == 'post' && date){
          return
        }
      })
      posts.sort((a, b) => {
        return this.getTimeNum(b) - this.getTimeNum(a)
      })
      return posts
    }
  },
  methods:{
    getTimeNum(date){
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
</style>
