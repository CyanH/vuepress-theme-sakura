<template>
  <a
    v-if="item.type === 'permalink'"
    :href="item.link"
    :target="item._blank ? '_blank' : ''"
  >{{ item.title }}</a>
  <router-link
    v-else
    :to="item.link"
  >{{ item.title }}</router-link>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="stylus" scoped>
a
  color white
  font-size 1.8em
  margin 0 .6em 1em
  color rgba(255, 255, 255, .65)
  transition all .6s
  cursor pointer
  display inline-flex
  justify-content center

  &:hover
    color white
    text-shadow 0 0 2px #fff
</style>
