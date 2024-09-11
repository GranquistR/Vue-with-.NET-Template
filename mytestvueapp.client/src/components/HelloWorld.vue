<template>
  <div class="weather-component">
    <h1>Weather forecast</h1>
    <p>This component demonstrates fetching data from the server.</p>

    <div v-if="loading" class="loading">
      Loading... Please refresh once the ASP.NET backend has started. See
      <a href="https://aka.ms/jspsintegrationvue"
        >https://aka.ms/jspsintegrationvue</a
      >
      for more details.
    </div>

    <div v-if="post" class="content">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="forecast in post" :key="forecast.date">
            <td>{{ forecast.date }}</td>
            <td>{{ forecast.temperatureC }}</td>
            <td>{{ forecast.temperatureF }}</td>
            <td>{{ forecast.summary }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

type Forecasts = {
  date: string;
  temperatureC: string;
  temperatureF: string;
  summary: string;
}[];

const loading = ref(true);
const post = ref<Forecasts | null>(null);

onMounted(() => {
  // fetch the data when the view is created and the data is
  // already being observed
  fetchData();
});

function fetchData() {
  post.value = null;
  loading.value = true;

  fetch("weatherforecast")
    .then((r) => r.json())
    .then((json) => {
      post.value = json as Forecasts;
      loading.value = false;
      return;
    });
}
</script>

<style scoped>
th {
  font-weight: bold;
}

th,
td {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.weather-component {
  text-align: center;
}

table {
  margin-left: auto;
  margin-right: auto;
}
</style>
