<template>
    <form @submit.prevent="searchWeather" class="w-full flex items-center justify-center">
      <input
        class="
          w-1/3
          border-2
          rounded-md
          h-10
          focus:ring-1 focus:ring-yellow-600
          focus:outline-none
          text-opacity-60
          font-extralight
          p-3
        "
        type="text"
        name="location"
        id="location"
        v-model="searchText"
      />
      <button
        type="submit"
        class="
          border-2 border-yellow-600
          transition
          duration-500
          ease-in-out
          text-white
          bg-yellow-500
          hover:text-yellow-500
          hover:bg-white
          font-bold
          rounded-md
          w-24
          px-2
          ml-2
          h-10
        "
      >
        Weather!
      </button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            searchText : ""
        }
    },
    methods : {
        searchWeather() {
            this.$emit('newSearchText', this.searchText)
        }
    }
};
</script>

<style>
</style>