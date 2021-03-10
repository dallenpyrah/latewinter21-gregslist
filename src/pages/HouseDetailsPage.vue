<template>
<div class="row justify-content-around">
  <div class="col-4">
        <div class="card m-3 shadow-lg bg-dark text-light">
          <h5 class="card text-dark m-3 p-1 text-center">About the House</h5>
          <h3 class="card-title m-3">Price: {{state.house.price}}</h3>
          <h4 class="card-text m-3">Bedrooms: {{state.house.bedrooms}} </h4>
          <h4 class="m-3">Bathrooms: {{state.house.bathrooms}}</h4>
          <h4 class="m-3">Levels: {{state.house.levels}}</h4>
          <h4 class="m-3">Description: <p class="m-3 card text-dark p-2">{{state.house.description}}</p></h4>
          <button class="btn btn-danger m-3" @click="deleteHouse">Delete</button>
        </div>
  </div>
  <div class="col-6 m-3 card shadow-lg bg-dark text-light">
        <img class="card-img-top p-4" :src="state.house.imgUrl" alt="house">

  </div>
</div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../Appstate'
import { useRoute, useRouter } from 'vue-router'
import { housesService } from '../services/HousesService'
export default {
  name: 'HouseDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.houses)
    })

    onMounted(() => { housesService.getHouse(route.params.id) })

    return {
      route,
      state,
      async deleteHouse() {
        await housesService.deleteHouse(state.house._id)
        router.push({ name: 'Houses' })
      }
    }
  },
  components: {}
}
</script>

<style>

</style>
