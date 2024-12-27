<template>
  <div class="flex flex-column justify-content-center align-items-center gap-4">
    <div>
      <h1>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <p>Make sure to start the sql server by running 'docker-compose up -d'</p>

      <div v-if="loading" class="loading">
        Loading... Please refresh once the ASP.NET backend has started. See
        <a href="https://aka.ms/jspsintegrationvue"
          >https://aka.ms/jspsintegrationvue</a
        >
        for more details.
      </div>

      <div v-if="forecasts" class="content">
        <DataTable :value="forecasts" tableStyle="min-width: 50rem">
          <Column field="date" header="Date">
            <template #body="slotProps">
              {{ slotProps.data.date }}
            </template></Column
          >
          <Column field="temperatureC" header="temperatureC"></Column>
          <Column field="temperatureF" header="temperatureF"></Column>
          <Column field="summary" header="summary"></Column>
        </DataTable>
      </div>
    </div>
    <div>
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import WeatherForecastService from "@/services/WeatherForecastService";
import type Forecast from "@/entitites/Forecast";

const loading = ref(true);
const forecasts = ref<Forecast[]>([]);

onMounted(() => {
  // fetch the data when the view is created and the data is
  // already being observed
  WeatherForecastService.GetWeatherForecast().then((data) => {
    forecasts.value = data;
    loading.value = false;
  });
});
</script>

<style scoped></style>
