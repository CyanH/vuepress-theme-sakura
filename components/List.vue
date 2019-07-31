<template>
  <div class="site-content">
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
              <img :src="item.frontmatter.backgroundImage">
            </div>
            <div class="post-content-wrap">
              <div class="post-content">
                <div class="post-date">
                  时间
                </div>
                <div>标题</div>
              </div>
            </div>
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

.post-list-thumb
  float left
  width 100%
  height 300px
  position relative
  margin 20px 0 20px
  border-radius 10px
  background-color rgba(255, 255, 255, 0)
  box-shadow 0 1px 20px -6px rgba(0, 0, 0, .5)
  transition box-shadow .3s ease

.post-list-show
  animation post-list-show .5s
  opacity 1

.post-thumb
  float right
  width 55%

  @media (max-width: $MQMobile)
    width 100%

  img
    width 100%
    height 300px
    object-fit cover

    @media (max-width: $MQMobile)
      border-radius 10px 10px 0 0
      height 210px

    @media (min-width: $MQMobile + 1px)
      border-radius 10px 0 0 10px

.post-list-thumb-left .post-thumb
  float left

.post-content-wrap
  position relative
  display inline-block
  float right
  padding-right 30px
  padding-left 0
  width 40%
  margin 20px 10px 0
</style>
