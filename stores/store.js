import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      socket: null,
      requests: [],
      stats: null,
    };
  },
  actions: {
    setSocket(socket) {
      this.socket = socket;
    },
    async fetchCurrentRequest(id) {
      const { findOne } = useStrapi();

      return await findOne("requests", id, {
        populate: {
          userFrom: {
            populate: {
              avatar: true,
            },
          },
          messages: {
            populate: {
              file: true,
              userFrom: true,
            },
          },
        },
      });
    },
    async fetchRequests() {
      const { find } = useStrapi();
      const user = useStrapiUser();

      this.requests = await find("requests", {
        populate: {
          userFrom: {
            populate: {
              avatar: true,
              profile: true,
            },
          },
        },
        filters: { userWorker: user.value.id },
      }).then((res) => res.data.sort((a, b) => b.id - a.id));
    },
    fetchStats() {
      const client = useStrapiClient();
      const user = useStrapiUser();
      client("/analytic/" + user.value.id).then((res) => {
        this.stats = res.data.analytic;
      });
    },
    logout() {
      const { logout } = useStrapiAuth();

      navigateTo({ path: "/auth" });
      logout();

      this.requests = [];
      this.socket = null;
    },
  },
});
