<template>
  <button :type="type" class="button" :class="[variant, { disabled: isDisabled }]" :aria-label="ariaLabel"
    :disabled="isDisabled">
    <slot />
  </button>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'button'
  },
  ariaLabel: {
    type: String,
  },
  variant: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'tertiary'].includes(value)
    }
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
@import 'VButton';
</style>