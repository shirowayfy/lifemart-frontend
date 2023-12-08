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
const { setSocket, addRequest, setUserId, addMessage } = store;
const { user, activeRequest } = storeToRefs(store);

onMounted(() => {
  const socket = io("ws://localhost:3500");
  socket.emit("enterRoom", {
    name: "Petr",
    room: "1",
  });
  socket.on("message", (data) => {
    if (data.name === "Admin" && !data.action) return;

    if (data.action === "join") {
      setUserId(data.id);
    } else {
      const { id, name, text, time } = data;

      if (id === user.value.id) {
        addMessage(activeRequest.value, id, text, time);
      } else {
        addRequest(id, name, text, time);
      }
    }
  });
  setSocket(socket);
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
