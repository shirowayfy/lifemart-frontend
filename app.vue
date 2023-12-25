<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import io from "socket.io-client";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { setUser } = store;
const { activeRequest } = storeToRefs(store);

const user = useStrapiUser();
const token = useStrapiToken();

setUser(user.value);

watch(
  user,
  () => {
    if (user.value) {
      const socket = io("ws://localhost:1337", {
        query: {
          jwt: token.value,
        },
      });

      socket.emit("join");
    }
  },
  { immediate: true }
);

onMounted(() => {
  //socket.emit("join", {});
  //console.log(socket.id);
  //socket.emit("join", {
  //  username: "Василий",
  //  userId: "1",
  //  //groupId: 5,
  //  message: "Privet",
  //});
  //socket.emit("message", {
  //  text: "dsafkdsfkj",
  //});
});
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: flex-start;

  background: #fff;
  height: 100vh;
  overflow: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__content {
    flex-grow: 1;
    padding: 25px;
    overflow: hidden;
  }
}
</style>
