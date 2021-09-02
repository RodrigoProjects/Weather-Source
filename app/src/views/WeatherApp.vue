<template>
  <div class="w-full flex flex-col items-center gap-8">
    <Header />
    <Search @newSearchText="searchWeather"/>
    <NotFound class="mt-3" v-if="error"/>
    <LoadingResults class="mt-10" v-if="loading" />
    <WeatherCards v-if="results" :weathers="results" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import NotFound from '@/components/NotFound.vue'
import WeatherCards from '@/components/WeatherCards.vue'
import LoadingResults from '@/components/LoadingResults.vue'

import axios from 'axios'

export default {
  components : {
    Header,
    Search,
    NotFound,
    WeatherCards,
    LoadingResults
  },
  data () {
    return {
      results : [],
      error : false,
      loading : false 
    }
  },
  methods : {
    searchWeather(input) {
      this.error = false
      this.loading = true
      let uri = encodeURI(input)

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${uri}&appid=${process.env.VUE_APP_WEATHER_KEY}&lang=pt&units=metric`)
        .then(weatherInfo => {
          this.results.push(weatherInfo.data)
          console.log(weatherInfo.data)
        })
        .catch(() => {
          this.error = true
        })
        .finally(() => {
          this.loading = false
        })

      
    }
  }
}
</script>
