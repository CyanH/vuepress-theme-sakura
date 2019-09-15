<template>
  <svg
    class="icon"
    :class="`icon-${iconSize}`"
    @click="iconClick"
  >
    <use :xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String
    },
    iconSize: {
      type: String,
      validator (value) {
        return [
          'small',
          'medium',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    iconClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.icon
  &.icon-small
    width 1.5em
    height 1.5em

  &.icon-medium
    width 2.8em
    height 2.8em

  &.icon-large
    width 3.8em
    height 3.8em
</style>