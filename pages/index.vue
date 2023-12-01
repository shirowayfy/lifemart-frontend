<template>
  <div class="dashboard">
    <div class="dashboard__box requests">
      <div class="dashboard__box-header">
        <h3 class="dashboard__box-title">Обращения</h3>
      </div>
      <div class="dashboard__box-content requests-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum a ex
        deserunt tempora neque quas aspernatur consectetur ullam veniam soluta
        voluptatem provident similique commodi ipsam, blanditiis harum optio
        delectus?
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

<script setup></script>

<style lang="scss" scoped>
.dashboard {
  padding: 25px;
  background: $background;

  display: grid;
  grid-template-columns: 2.5fr 7fr 2.5fr;
  gap: 25px;

  &__box {
    //background: #fff;
    //border-radius: 8px;
    //border: 1px solid $border-color;
    /* From https://css.glass */
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
      margin-bottom: 5px;
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
  }
}
</style>
