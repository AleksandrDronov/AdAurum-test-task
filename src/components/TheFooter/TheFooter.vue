<script setup>
import VButton from '../buttons/VButton.vue';
import ConvertIcon from '../icons/ConvertIcon.vue';
import GlobalIcon from '../icons/GlobalIcon.vue';
import VkIcon from '../icons/VkIcon.vue';
import WAIcon from '../icons/WAIcon.vue';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="Логотип">
      <a class="text_default text_medium link" target="_blank" rel="noreferrer" href="#">
        Политика конфиденциальности
      </a>
      <div class="block">
        <ConvertIcon />
        <a class="text_default text_medium link" href="mailto:pinkchicken@adaurum.ru">
          pinkchicken@adaurum.ru
        </a>
      </div>
      <ul class="list lang">
        <li>
          <GlobalIcon />
        </li>
        <li>
          <VButton>
            <span class="text_default text_medium link">RU</span>
          </VButton>
        </li>
        <li>
          <VButton>
            <span class="text_default text_medium link">EU</span>
          </VButton>
        </li>
        <li>
          <VButton>
            <span class="text_default text_medium link">TUR</span>
          </VButton>
        </li>
      </ul>
      <ul class="list">
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <VkIcon />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <WAIcon />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
@import 'TheFooter';
</style>