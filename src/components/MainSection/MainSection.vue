<script setup>
import IconBg from '../icons/IconBg.vue';
import VButton from '../buttons/VButton.vue';
import DotsIcon from '../icons/DotsIcon.vue';
import FolderIcon from '../icons/FolderIcon.vue';
import PicIcon from '../icons/PicIcon.vue';
import PlaneIcon from '../icons/PlaneIcon.vue';
import XmlIcon from '../icons/XmlIcon.vue';
import RefreshIcon from '../icons/RefreshIcon.vue';
import ExclamationIcon from '../icons/ExclamationIcon.vue';
import ArrowIcon from '../icons/ArrowIcon.vue';

import { createPost, getMediaPlan } from '@/api/api';
import { currentTime } from '@/utils/utils';
import { ref, watch } from 'vue';

const message = ref('');
const messages = ref([]);

const isMediaPlane = ref(false);
const mediaPlanes = ref([]);
const isMediaPlaneLoading = ref(false);

const isReport = ref(false);
const reports = ref([]);
const isReportLoading = ref(false);

const isShowMorePlanes = ref(false);
const isShowMoreReports = ref(false);


watch(messages.value, () => {
  let container = document.getElementById('container');
  if (!container) return
  container.scrollTo(0, container.scrollHeight);
})


const onSubmit = async () => {
  if (!message.value) return;
  const time = currentTime();

  try {
    const post = await createPost({ message: message.value });
    const messageWithTime = { id: post.id, message: post.message, time, isMine: true };
    messages.value.push(messageWithTime);
  } catch (e) {
    console.error(e)
    return
  } finally {
    message.value = '';
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  })
  const botMessage = { id: 'bot', message: 'Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt. ', time, isMine: false };
  messages.value.push(botMessage);
}

const onClickMedia = async () => {
  isMediaPlane.value = true;
  const mediaPlane = await getMediaPlan();
  isShowMorePlanes.value = false;
  isShowMoreReports.value = false;
  mediaPlanes.value.unshift(mediaPlane)
  isMediaPlaneLoading.value = true;
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  })
  isMediaPlaneLoading.value = false
}

const onClickReport = async () => {
  isReport.value = true;
  const report = await getMediaPlan();
  isShowMorePlanes.value = false;
  isShowMoreReports.value = false;
  reports.value.unshift(report)
  isReportLoading.value = true;
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  })
  isReportLoading.value = false
}


</script>

<template>
  <div class="container">
    <div class="left-block">
      <h2 class="text_l text_semi-bold">
        Файлы
      </h2>
      <div class="files" v-if="!isMediaPlane && !isReport">
        <img src='@/assets/images/files.png' alt="Три папки" class="image">
        <p class="text_default text_medium text_align-center files-text">
          Закажи у&nbsp;личного помощника медиаплан. Он&nbsp;появится в&nbsp;этом разделе
        </p>
      </div>

      <div v-else class="media-container">
        <div class="media">
          <h3 class="text_m text_semi-bold media-title">Медиапланы</h3>
          <ul class="media-list"
            :style="{ 'maxHeight': isShowMorePlanes ? 'fit-content' : isMediaPlaneLoading ? '272px' : '192px' }">
            <li v-for="media in mediaPlanes" :key="media.id">
              <div class="media-item">
                <XmlIcon />
                <p>{{ media.name }}</p>
                <div class="refresh loading" v-if="isMediaPlaneLoading && media.id === mediaPlanes[0].id">
                  <RefreshIcon class="refresh-icon" />
                </div>
                <div class="refresh" v-else>
                  <ArrowIcon />
                </div>
              </div>
              <div class="media-status" v-if="isMediaPlaneLoading && media.id === mediaPlanes[0].id">
                <ExclamationIcon />
                <p class="text_sm">Медиаплан в процессе составления</p>
              </div>
            </li>
          </ul>
          <p class="show-more" @click="isShowMorePlanes = true" v-if="mediaPlanes.length > 4 && !isShowMorePlanes">
            Показать еще</p>
          <p class="show-more" @click="isShowMorePlanes = false" v-else-if="mediaPlanes.length > 4 && isShowMorePlanes">
            Скрыть</p>
        </div>
        <div class="media">
          <h3 class="text_m text_semi-bold media-title">Отчеты</h3>
          <ul class="media-list"
            :style="{ 'maxHeight': isShowMoreReports ? 'fit-content' : isReportLoading ? '272px' : '192px' }">
            <li v-for="report in reports" :key="report.id">
              <div class="media-item">
                <XmlIcon />
                <p>{{ report.name }}</p>
                <div class="refresh loading" v-if="isReportLoading && report.id === reports[0].id">
                  <RefreshIcon class="refresh-icon" />
                </div>
                <div class="refresh" v-else>
                  <ArrowIcon />
                </div>
              </div>
              <div class="media-status" v-if="isReportLoading && report.id === reports[0].id">
                <ExclamationIcon />
                <p class="text_sm">Отчет формируется</p>
              </div>
            </li>
          </ul>
          <p class="show-more" @click="isShowMoreReports = true" v-if="reports.length > 4 && !isShowMoreReports">
            Показать еще</p>
          <p class="show-more" @click="isShowMoreReports = false" v-else-if="reports.length > 4 && isShowMoreReports">
            Скрыть</p>
        </div>

      </div>
    </div>
    <div class="buttons-mobile">
      <VButton variant="tertiary">Медиапланы</VButton>
      <VButton variant="tertiary">Oтчеты</VButton>
    </div>
    <div class="right-block">
      <div class="header">
        <h2 class="text_l text_semi-bold">
          Личный помощник
        </h2>
        <div class="right-box">
          <p class="text_default text_semi-bold"> Jim Davidson</p>
          <p class="text_default email">Jim Davidson@adaurum.ru</p>
          <VButton ariaLabel="Показать доп. действия">
            <IconBg color="gray">
              <DotsIcon />
            </IconBg>
          </VButton>
        </div>
      </div>
      <div class="content">
        <div class="text_align-center assistant" v-if="messages.length === 0">
          <img src='@/assets/images/assistant.png' alt="Девушка с гарнитурой">
          <p class="text_default text_medium description">
            Это чат с&nbsp;администратором. Ты&nbsp;можешь с&nbsp;ним пообщаться по&nbsp;любому вопросу о&nbsp;нашем
            сервисе и&nbsp;узнать о&nbsp;ходе
            работы
          </p>
        </div>
        <ul class="list" v-if="messages.length > 0" id="container">
          <li :class="{ 'list-item': !value.isMine }" v-for="value in messages" :key="value.id">
            <img src='@/assets/images/jim.jpg' alt="Jim" v-if="!value.isMine" />
            <div>
              <div class="message text_default text_medium" :class="{ 'message-mine': value.isMine }">
                {{ value.message }}
              </div>
              <p class="time time-mine" v-if="value.isMine">
                {{ value.time }}
              </p>
              <p class="time" v-else>
                <span class="text_semi-bold highlight">Jim</span> {{ value.time }}
              </p>
            </div>
          </li>
        </ul>
        <div>
          <div class="buttons">
            <VButton variant="primary" @click="onClickMedia" :isDisabled="isMediaPlaneLoading">
              Заказать медиаплан
            </VButton>
            <VButton variant="secondary" @click="onClickReport" :isDisabled="isReportLoading" class="button-secondary">
              Заказать отчет
            </VButton>
          </div>
          <form class="form" @submit.prevent="onSubmit">
            <input type="text" placeholder="Введите сообщение для администратора" class="input" v-model="message" />
            <div class="buttons-add">
              <div class="buttons-left">
                <VButton ariaLabel="Загрузить файл">
                  <FolderIcon />
                </VButton>
                <VButton ariaLabel="Загрузить изображение">
                  <PicIcon />
                </VButton>
              </div>
              <VButton type="submit">
                <IconBg size="big">
                  <PlaneIcon />
                </IconBg>
                <p class="text_s button-enter">Enter</p>
              </VButton>
            </div>
          </form>
        </div>
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
@import 'MainSection';
</style>