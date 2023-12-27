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
const { setSocket, fetchRequests } = store;
const { socket, requests } = storeToRefs(store);

const user = useStrapiUser();
const token = useStrapiToken();

const handleFetchRequests = () => {
  fetchRequests().then(() => {
    const activeRequests = requests.value.filter((r) => r.status === "active");

    if (activeRequests.length) {
      socket.value.emit("join");
    }
  });
};

watch(
  user,
  () => {
    if (user.value) {
      const socketInstance = io("ws://localhost:1337", {
        query: {
          jwt: token.value,
        },
      });

      setSocket(socketInstance);

      socket.value.emit("join");
      socket.value.on("newRequest", () => {
        console.log("NNNNNNEEEEWWW");
        handleFetchRequests();
      });
      socket.value.on("requestCompleted", () => {
        handleFetchRequests();
      });
    }
  },
  { immediate: true }
);

watch(
  user,
  () => {
    if (user.value) {
      handleFetchRequests();
    }
  },
  { immediate: true }
);
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
