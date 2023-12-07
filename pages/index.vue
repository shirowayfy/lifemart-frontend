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
          class="active"
          online
          time="2 мин."
          :unread="2"
          :message="text"
        />
        <RequestItem time="Сегодня" :message="text" />
        <RequestItem time="2 окт." :message="text" />
      </div>
    </div>
    <div class="dashboard__box"></div>
    <div class="dashboard__box">
      <div class="dashboard__box-header">
        <h3 class="dashboard__box-title">Данные клиента</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const text = ref("Lorem ipsum dolor sit amet");
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 25px;
  background: $background;

  display: grid;
  grid-template-columns: 2.5fr 7fr 2.5fr;
  gap: 25px;

  &__box {
    background: rgba(#fff, 0.6);
    border-radius: 10px;
    border: 1px solid $border-color;

    display: flex;
    flex-direction: column;

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
}
</style>
