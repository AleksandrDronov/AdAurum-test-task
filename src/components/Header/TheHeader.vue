<script lang="ts" setup>
import LogoBrand from '../Logo/LogoBrand.vue';
import IconBg from '../icons/IconBg.vue';
import ConvertCardIcon from '../icons/ConvertCardIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
import SettingsIcon from '../icons/SettingsIcon.vue';
import LoginIcon from '../icons/LoginIcon.vue';
import VButton from '../buttons/VButton.vue';


</script>

<template>
  <header class="header">
    <LogoBrand class="logo" />
    <div class="container">
      <div class="block">
        <IconBg class="header_icon">
          <ConvertCardIcon />
        </IconBg>
        <p class="text_m text_semi-bold">
          5%
        </p>
      </div>
      <div class="block">
        <IconBg class="header_icon">
          <UserIcon />
        </IconBg>
        <p class="text_m text_semi-bold">
          Username@adaurum.ru
        </p>
      </div>
      <div class="block block_right">
        <VButton ariaLabel="Настройки">
          <IconBg color="white">
            <SettingsIcon />
          </IconBg>
        </VButton>
        <VButton ariaLabel="Вход">
          <IconBg color="white">
            <LoginIcon />
          </IconBg>
        </VButton>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@import 'TheHeader';
</style>