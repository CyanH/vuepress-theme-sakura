<template>
  <section class="splash">
    <section class="body">
      <section class="shadow">
        <section class="content">
          <h1 class="title">{{data.userName}}</h1>
          <nav>
            <LinkItem
              v-for="item in data.Splash"
              :item="item"
              :key="item.title"
            ></LinkItem>
          </nav>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/comfortaa.css'

.splash
  width 100vw
  height 100vh

.body
  background-size cover
  background-position 50%
  width 100%
  height 100%
  background-image url('../img/miku.jpg')

.shadow
  background-color rgba(0, 0, 0, .7)
  width 100%
  height 100%

.content
  font-family 'Comfortaa', 'source sans pro', 'Ubuntu', 'Segoe UI', 'Roboto', 'Oxygen', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'PingFang SC', 'Hiragino Sans GB', 'Source Han Sans CN', 'Source Han Sans SC', 'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp', 'Arial', sans-serif
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  flex-direction column

  .title
    margin-top 0
    margin-bottom 1.4rem
    color hsla(0, 0%, 100%, .8)
    font-size 6rem

  nav
    display flex
    @media only screen and (max-width: $MQMobileNarrow)
      flex-direction column
</style>
