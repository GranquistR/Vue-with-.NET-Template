<template>
  <Button
    @click="ToggleDarkMode()"
    :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
    :label="isDarkMode ? 'Dark Mode' : 'Light Mode'"
  />
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";

const isDarkMode = ref(true);

function ToggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    const element = document.querySelector("html");
    element?.classList.add("dark-mode-toggle");
  } else {
    const element = document.querySelector("html");
    element?.classList.remove("dark-mode-toggle");
  }
}
</script>
