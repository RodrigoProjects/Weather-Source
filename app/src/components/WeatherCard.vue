<template>
  <div
    class="
      w-1/4
      flex flex-col
      border-2
      rounded-lg
      shadow-md
      border-opacity-60 border-yellow-600
    "
  >
    <div id="cityHeader" class="flex w-full p-5 items-center justify-between border-b">
      <div id="header-name" class="flex items-center">
        <div class="font-bold text-gray-600 text-xl">
          {{ $filters.capitalize(weatherData.name) }}
        </div>
        <div class="ml-2 font-light opacity-60">
          | {{ weatherData.sys.country }}
        </div>
      </div>
      <div class="font-light opacity-40">
          [{{ weatherData.coord.lat }}, {{ weatherData.coord.lon }}]
      </div>
    </div>
    <div
      id="weather-description"
      class="px-5 pb-5 flex flex-col items-center justify-center w-full"
    >
      <img
        class="w-30"
        :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
        alt="Weather image"
      />
      <div class="text-xl font-bold text-gray-500">
        {{ $filters.capitalize(weatherData.weather[0].description) }}
      </div>
    </div>
    <div id="weather-info flex flex-col items-center w-full">
      <div class="flex items-center p-5 border-b border-t" v-for="(measure, idx) in Object.keys(weatherData.main)" :key="idx">
        <div class="font-bold text-gray-700 mr-2">
          {{ $filters.capitalize(measure).replace('_', ' ') }}:
        </div>
        <div class="font-light opacity-80">
          {{ $filters.capitalize(weatherData.main[measure]).replace('_', ' ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>