<template>
  <div class="chat">
    <div class="chat__header">
      <div class="chat__user">
        <div class="chat__user-img">
          <img :src="media + activeRequest.userFrom.avatar.url" alt="" />
        </div>
        <div class="chat__user-info">
          <p class="chat__user-name">{{ activeRequest.userFrom.username }}</p>
          <p
            class="chat__user-status"
            :class="{ online: activeRequest.status === 'active' }"
          >
            {{ activeRequest.status === "active" ? "Online" : "Offline" }}
          </p>
        </div>
      </div>
      <BaseButton v-if="!isCompleted" @click="completeRequest"
        >Завершить запрос</BaseButton
      >
    </div>
    <div class="chat__ended" v-if="isCompleted">Запрос завершен</div>
    <div class="chat__body" ref="chatArea">
      <ChatMessage
        v-for="message in activeRequest.messages"
        :key="message.id"
        :time="message.createdAt"
        :class="{ to: message.userFrom.id === user.id }"
      >
        <span v-if="message.text"> {{ message.text }}</span>
        <div v-else class="file">
          <img
            class="file__image"
            v-if="message.file.mime.includes('image')"
            :src="media + message.file.url"
            alt=""
          />
          <a
            :href="media + message.file.url"
            target="_blank"
            download
            class="file__file"
            v-else
          >
            <Icon size="48" name="ph:file-text" />
            <span>{{ message.file.name }}</span>
          </a>
        </div>
      </ChatMessage>
    </div>
    <form class="chat__footer" @submit.prevent="sendData" v-if="!isCompleted">
      <div class="chat__footer-bottom">
        <BaseSimpleButton class="green">
          <Icon name="ph:paperclip" size="24" />
          <label for="file-input" class="file-input">
            <input
              :disabled="isCompleted"
              type="file"
              id="file-input"
              ref="fileInput"
              v-show="false"
              name="files"
              @change="handleFileUpload"
            />
          </label>
        </BaseSimpleButton>
        <BaseInput
          placeholder="Напишите сообщение..."
          ref="input"
          v-model="text"
        />
        <BaseSimpleButton class="green" @click="sendData">
          <Icon name="ph:paper-plane-right" size="24" />
        </BaseSimpleButton>
      </div>
    </form>
    <form class="chat__footer" v-else>
      <div class="chat__footer-bottom">
        <BaseInput placeholder="Недоступно" disabled />
      </div>
    </form>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const props = defineProps({
  activeRequest: {
    type: Object,
    required: true,
  },
});

const store = useAppStore();
const { socket } = storeToRefs(store);

const client = useStrapiClient();
const media = useStrapiMedia();
const user = useStrapiUser();

const chatArea = ref(null);
const input = ref(null);
const fileInput = ref();

const text = ref();

const sendData = () => {
  if (!text.value) return;

  socket.value.emit("message", {
    text: text.value,
  });

  text.value = "";
};
const completeRequest = () => {
  socket.value.emit("completeRequest");
};

const handleFileUpload = async (e) => {
  const files = fileInput.value.files;
  if (!files.length) return;

  const file = files[0];

  const form = new FormData();
  form.append("files", file);

  const res = await client(`/upload`, {
    method: "POST",
    body: form,
  });

  if (res) {
    const id = res[0].id;

    socket.value.emit("message", {
      file: id,
    });
  }
};

const isCompleted = computed(() => props.activeRequest.status === "completed");

watch(
  () => props.activeRequest,
  () => {
    nextTick().then(() => {
      chatArea.value.scrollTop = chatArea.value.scrollHeight;
      if (input.value) {
        input.value.focus();
      }
    });
  },
  { immediate: true }
);
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
        object-fit: cover;
      }
    }

    &-status {
      font-size: 16px;
      color: $grey;

      &.online {
        color: $primary;
      }
    }
  }

  &__body {
    flex: 1 1 auto;
    overflow: hidden auto;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    & .message:first-of-type {
      margin-top: auto;
    }
  }

  &__footer {
    &-bottom {
      display: flex;
      gap: 10px;
      padding: 15px;
    }
  }
}

.file-input {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.file {
  &__image {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  &__file {
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      text-decoration: underline;
    }

    span {
      font-size: 14px;
      word-break: break-all;
    }
  }
}
</style>
