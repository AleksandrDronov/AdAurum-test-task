<script lang="ts" setup>
import LogoBrand from '../Logo/LogoBrand.vue';
import IconBg from '../icons/IconBg.vue';
import ConvertCardIcon from '../icons/ConvertCardIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
import SettingsIcon from '../icons/SettingsIcon.vue';
import LoginIcon from '../icons/LoginIcon.vue';
</script>

<template>
  <header class="header">
    <LogoBrand />
    <div class="container">
      <div class="block">
        <IconBg>
          <ConvertCardIcon />
        </IconBg>
        <p class="text_m">
          5%
        </p>
      </div>
      <div class="block">
        <IconBg>
          <UserIcon />
        </IconBg>
        <p class="text_m">
          Username@adaurum.ru
        </p>
      </div>
      <IconBg color="white">
        <SettingsIcon />
      </IconBg>
      <IconBg color="white">
        <LoginIcon />
      </IconBg>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@import 'TheHeader';
</style>