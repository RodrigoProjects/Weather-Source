<template>
  <div>
    <div id="cityHeader">
      {{ weather.name | capitalize }}
    </div>
    <PresentWeather />
  </div>
</template>

<script>
export default {
  props : {
    weather : Object
  }
}
</script>

<style>

</style>