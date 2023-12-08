<template>
  <div class="chat">
    <div class="chat__header">
      <div class="chat__user">
        <div class="chat__user-img">
          <img src="/demo-user.png" alt="" />
        </div>
        <div class="chat__user-info">
          <p class="chat__user-name">{{ activeRequestData.name }}</p>
          <p class="chat__user-status">online</p>
        </div>
      </div>
      <BaseButton v-if="!requestEnded" @click="finishRequest"
        >Завершить запрос</BaseButton
      >
    </div>
    <div class="chat__ended" v-if="requestEnded">Запрос завершен</div>
    <div class="chat__body">
      <ChatMessage
        v-for="message in activeRequestData.messages"
        :key="message"
        :time="message.time"
        :class="{ to: message.user === user.id }"
      >
        {{ message.text }}
      </ChatMessage>
    </div>
    <div class="chat__footer">
      <BaseInput v-model="text" :disabled="requestEnded" />
      <BaseSimpleButton class="green" @click="sendData">
        <Icon name="ph:paper-plane-right" size="24" />
      </BaseSimpleButton>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const store = useAppStore();
const { sendMessage, resetActiveRequest } = store;
const { requests, activeRequest, user } = storeToRefs(store);

const activeRequestData = computed(() => requests.value[activeRequest.value]);

const text = ref();
const sendData = () => {
  if (!text.value) return;
  sendMessage(text.value);
  text.value = "";
};

const requestEnded = ref(false);

const finishRequest = () => {
  requestEnded.value = true;
  sendMessage("Спасибо за ваше обращение!");
};
</script>

<style lang="scss" scoped>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__ended {
    text-align: center;
    padding: 15px;
    border-bottom: 1px solid $border-color;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
    border-bottom: 1px solid $border-color;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 15px;

    &-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-status {
      font-size: 16px;
      color: $primary;
    }
  }

  &__body {
    flex: 1 1 auto;
    overflow: auto;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    & .message:first-of-type {
      margin-top: auto;
    }
  }

  &__footer {
    display: flex;
    gap: 10px;
    padding: 15px;
  }
}
</style>
