<template>
  <div class="icon" :class="[size, color]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    validator(value) {
      return ['big'].includes(value)
    }
  },
  color: {
    type: String,
    validator(value) {
      return ['white'].includes(value)
    }
  }
})
</script>

<style lang="scss" scoped>
@import 'IconBg';
</style>