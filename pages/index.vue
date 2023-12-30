<template>
  <div class="page-container dashboard">
    <div class="box dashboard__box requests">
      <div class="dashboard__box-header">
        <h3 class="dashboard__box-title">Обращения</h3>
        <div class="dashboard__box-row">
          <BaseInput icon="ph:magnifying-glass" placeholder="Поиск..." />
          <BaseSimpleButton>
            <Icon name="ph:faders-horizontal" size="24" />
          </BaseSimpleButton>
        </div>
      </div>
      <div class="dashboard__box-content requests-content">
        <RequestItem
          v-for="request in requests"
          :key="request.id"
          :name="request.userFrom.username"
          :avatar="request.userFrom.avatar"
          :address="request.userFrom.profile[0].address"
          :online="request.status === 'active'"
          @click="setActiveRequestId(request.id)"
          :class="{
            active: activeRequestId === request.id,
            completed: request.status === 'completed',
          }"
        />
        <p class="empty" v-if="!requests.length">Нет обращений</p>
      </div>
    </div>
    <div class="box dashboard__box chat-box">
      <Chat v-if="activeRequest" :activeRequest="activeRequest" />
      <p class="empty" v-else>Выберите чат</p>
    </div>
    <!--<div class="dashboard__box info" v-if="activeRequest">
      <div class="dashboard__box-header">
        <h3 class="dashboard__box-title">Данные клиента</h3>
      </div>
      <div class="dashboard__box-content">
        <div>
          <p>Клиент: {{ activeRequest.userFrom.username }}</p>
          <p>Магазин: Ленина 32</p>
          <p>Количество обращений: 0</p>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const store = useAppStore();
const { fetchCurrentRequest } = store;
const { requests, socket } = storeToRefs(store);

const activeRequest = ref(null);
const activeRequestId = ref(null);

const setActiveRequestId = (id) => {
  activeRequestId.value = id;
};

const updateRequest = () => {
  if (!Number.isInteger(activeRequestId.value)) return;
  fetchCurrentRequest(activeRequestId.value).then((request) => {
    activeRequest.value = request.data;
  });
};

socket.value.on("newMessage", () => {
  updateRequest();
});

watch([activeRequestId, requests], () => {
  updateRequest();
});
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  gap: 25px;

  & .empty {
    padding: 0 12px;
    color: $grey;
    font-size: 16px;
  }

  &__box {
    display: flex;
    flex-direction: column;

    &.chat-box {
      flex-grow: 1;
      .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        height: 100%;
      }
    }

    &-header {
      padding: 15px;
    }

    &-title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    &-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-content {
      padding: 0 15px 15px;
      flex-grow: 1;
      overflow: auto;
    }
  }

  .requests {
    width: 280px;
    flex-shrink: 0;

    &__active-tab {
      width: 100%;
      padding: 10px;
      background: rgba($primary, 0.7);
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .requests__icon {
        font-size: 16px;
        display: none;
      }
    }

    &-content {
      //margin-top: 15px;

      padding: 0 0 15px;

      & .request-item:last-of-type {
        border-bottom: none;
      }
    }
  }

  .info {
    width: 250px;
    & .dashboard__box-title {
      margin-bottom: 0;
    }

    .empty {
      padding: 0;
    }
  }
}
</style>
