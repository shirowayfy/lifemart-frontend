<template>
  <div class="dashboard">
    <div class="dashboard__box requests">
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
          v-for="(request, key) in requests"
          :key="key"
          class="active"
          online
          time="2 мин."
          :message="request.messages[request.messages.length - 1].text"
          :name="request.name"
          @click="setActiveRequest(key)"
        />
        <p class="empty" v-if="!Object.keys(requests).length">
          Нет активных обращений
        </p>
      </div>
    </div>
    <div class="dashboard__box chat-box">
      <Chat v-if="activeRequest" />
      <p class="empty" v-else>Выберите чат</p>
    </div>
    <div class="dashboard__box info">
      <div class="dashboard__box-header">
        <h3 class="dashboard__box-title">Данные клиента</h3>
      </div>
      <div class="dashboard__box-content">
        <div v-if="activeRequest">
          <p>Клиент: {{ activeRequestData.name }}</p>
          <p>Магазин: Ленина 32</p>
          <p>Количество обращений: 0</p>
        </div>
        <p class="empty" v-else>Выберите клиента</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const store = useAppStore();
const { setActiveRequest, resetActiveRequest } = store;
const { requests, activeRequest } = storeToRefs(store);

const activeRequestData = computed(() => requests.value[activeRequest.value]);
const text = ref("Lorem ipsum dolor sit amet");
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 25px;
  background: $background;

  display: grid;
  grid-template-columns: 2.5fr 7fr 2.5fr;
  gap: 25px;

  height: 100%;

  & .empty {
    padding: 0 12px;
    color: $grey;
    font-size: 16px;
  }

  &__box {
    background: rgba(#fff, 0.6);
    border-radius: 10px;
    border: 1px solid $border-color;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    &.chat-box {
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
    }
  }

  .requests {
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
    & .dashboard__box-title {
      margin-bottom: 0;
    }

    .empty {
      padding: 0;
    }
  }
}
</style>
