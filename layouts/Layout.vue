<template>
  <div>
    <div class="container">
      <ArticleList v-if="$page.frontmatter.home" />
      <ArticleContent v-else />
    </div>
    <MyFooter />
  </div>
</template>


