<template>
  <div>
    <NavBar @toggle-sidebar="$emit('toggle-sidebar')" />
    <div class="container">
      <ArticleCard />
    </div>
    <MyFooter />
  </div>
</template>
