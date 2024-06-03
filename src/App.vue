<script setup>
import TheHeader from './components/Header/TheHeader.vue';
import MainSection from './components/MainSection/MainSection.vue';
import TheFooter from './components/TheFooter/TheFooter.vue';
</script>

<template>
  <div>
    <TheHeader />

    <main class="custom_scroll">
      <MainSection />
    </main>
  </div>

  <TheFooter />
</template>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
