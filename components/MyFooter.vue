<template>
  <footer v-if="$themeConfig.lastUpdated" class="footer">
    <span>{{$themeConfig.lastUpdated}}</span>
  </footer>
  <footer v-else>
    
  </footer>
</template>

<style lang="stylus" scoped>
@import '../styles/config.styl';
.footer
  padding: 2%;
  max-width: 800px;
  margin 0 auto

@media (max-width: ($MQMobile + 1px)) {
  .footer {
    padding-left 0
    text-align center
  }
}
</style>
