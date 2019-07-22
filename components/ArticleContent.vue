<template>
  <div class="site-content">
    <div class="head">
      <img
        class="head-img"
        :src="$themeConfig.logo"
      >
    </div>
    <div class="content-area">
        <main class="site-main" role="main">
            <h1 class="main-title">
                Discovery
            </h1>
            <slot />
        </main>
    </div>
  </div>
</template>


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
