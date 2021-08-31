<template>
  <div class="w-full flex flex-col items-center gap-8">
    <Header />
    <Search @newSearchText="searchWeather"/>
    <NotFound class="mt-3" v-if="error"/>
    <LoadingResults class="mt-10" v-if="loading" />
    <WeatherResults v-if="results" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import NotFound from '@/components/NotFound.vue'
import WeatherResults from '@/components/WeatherResults.vue'
import LoadingResults from '@/components/LoadingResults.vue'

//import axios from 'axios'

export default {
  components : {
    Header,
    Search,
    NotFound,
    WeatherResults,
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
      alert(input)
    }
  }
}
</script>
