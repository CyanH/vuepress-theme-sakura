<template>
  <div>
    <NavBar @toggle-sidebar="$emit('toggle-sidebar')" />
    <div class="container">
      <ArticleList
        v-if="$page.frontmatter.home"
        @hide-list="hideList"
      />
      <ArticleContent v-else />
    </div>
    <MyFooter />
  </div>
</template>

<style lang="stylus" scoped>
// .container
//   @media (max-width: $MQMobile)
//     padding-top 220px
</style>
