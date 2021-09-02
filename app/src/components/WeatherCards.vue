<template>
  <div class="w-3/4 mt-10 my-20 flex items-center justify-center gap-10 flex-wrap">
    <WeatherCard class="flex-shrink-0" v-for="(weather, idx) in weathers" :key="idx" :weatherData="weather" />
  </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard.vue'

export default {
  props : {
    weathers : Object
  },
  components : {
    WeatherCard
  }
}
</script>

<style>

</style>