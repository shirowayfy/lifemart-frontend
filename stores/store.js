import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      socket: null,
      user: {
        id: "test",
        name: "Петр Петров",
      },
      activeRequest: null,
      requests: {},
    };
  },
  actions: {
    setSocket(socket) {
      this.socket = socket;
    },
    setUserId(id) {
      this.user.id = id;
    },
    addMessage(id, from, text, time) {
      this.requests[id].messages.push({
        text,
        time,
        user: from,
      });
    },
    addRequest(id, name, text, time) {
      if (!this.requests[id]) {
        this.requests[id] = {
          messages: [],
        };
      }

      this.requests[id].name = name;

      this.addMessage(id, id, text, time);
    },
    sendMessage(text) {
      this.socket.emit("message", {
        name: this.user.name,
        text,
      });
    },
    setActiveRequest(id) {
      this.activeRequest = id;
    },
    resetActiveRequest() {
      this.activeRequest = null;
    },
  },
});
