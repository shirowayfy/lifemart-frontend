<template>
  <div class="page-container stats">
    <template v-if="stats">
      <div class="stats__items">
        <div class="box stats__box">
          <h3 class="stats__box-title">Завершённые запросы</h3>
          <p class="stats__box-value">{{ stats.totalRequests }}</p>
        </div>
        <div class="box stats__box">
          <h3 class="stats__box-title">Среднее время решения запроса (мин)</h3>
          <p class="stats__box-value">
            {{ roundValue(stats.averageRequestDuration) }}
          </p>
        </div>
        <div class="box stats__box work">
          <!--<h3 class="stats__box-title">Средняя оценка</h3>
          <p class="stats__box-value">0</p>-->
          <p class="stats__box-title">В разработке</p>
        </div>
      </div>
      <div class="box stats__graph">
        <h3 class="stats__graph-title">Статистика запросов</h3>
        <Chart :stats="stats.graphData" />
      </div>
    </template>
  </div>
</template>

<script setup>
const store = useAppStore();
const { fetchStats } = store;
const { stats } = storeToRefs(store);

onMounted(() => {
  fetchStats();
});

const roundValue = (v) => {
  return v.toFixed(2);
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  gap: 25px;

  &__items {
    width: 280px;
    overflow: hidden;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
  }

  &__box {
    padding: 15px;
    text-align: center;
    height: 30%;

    display: flex;
    flex-direction: column;

    &-value {
      font-size: 72px;
      color: $primary;
      margin: auto 0;
    }
  }

  &__graph {
    flex-grow: 1;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      text-align: center;
      font-size: 24px;
    }

    & > div {
      flex-grow: 1;
    }
  }
}

.work {
  background: $pale-green;

  & .stats__box-title {
    color: $primary;
    font-size: 28px;
    margin: auto 0;
  }
}
</style>
