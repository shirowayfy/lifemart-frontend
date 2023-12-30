<template>
  <div>
    <Line :data="chartData" :style="styles" :options="options" />
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getFormattedDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
};

const getChartLabels = () => {
  const labels = [];
  for (const date of Object.keys(props.stats)) {
    labels.push(getFormattedDate(date));
  }
  return labels;
};

const props = defineProps({
  stats: Object,
});

let delayed;

const options = ref({
  responsive: true,
  interaction: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    mode: "index",
    intersect: true,
  },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
});

const chartData = ref({
  labels: getChartLabels(),
  datasets: [
    {
      label: "Завершённые запросы",
      data: Object.values(props.stats).map((v) => v[0]),
      borderColor: "#3f9e36",
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverRadius: 8,
      fill: false,
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
    //{
    //  label: "Время выполнения",
    //  data: Object.values(props.stats).map((v) => v[1]),
    //  borderColor: "#AFE1AF",
    //  pointStyle: "circle",
    //  pointRadius: 5,
    //  pointHoverRadius: 8,
    //  fill: false,
    //  cubicInterpolationMode: "monotone",
    //  tension: 0.4,
    //},
  ],
});

const styles = ref({
  height: `100%`,
  width: `100%`,
  position: "relative",
});
</script>

<style lang="scss" scoped></style>
