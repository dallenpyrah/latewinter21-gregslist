<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Houses</h1>
      </div>
    </div>
    <form class="form-inline" @submit.prevent="createHouse()">
      <div class="form-group">
        <input
          type="number"
          name="price"
          id="price"
          class="form-control"
          placeholder="Price"
          aria-describedby="helpId"
          v-model="state.newHouse.price"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          class="form-control"
          placeholder="Bedrooms"
          aria-describedby="helpId"
          v-model="state.newHouse.bedrooms"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="bathrooms"
          id="bathrooms"
          class="form-control"
          placeholder="Bathrooms"
          aria-describedby="helpId"
          v-model="state.newHouse.bathrooms"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="levels"
          id="levels"
          class="form-control"
          placeholder="Levels"
          aria-describedby="helpId"
          v-model="state.newHouse.levels"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          class="form-control"
          placeholder="ImgUrl"
          aria-describedby="helpId"
          v-model="state.newHouse.imgUrl"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="year"
          id="year"
          class="form-control"
          placeholder="Year"
          aria-describedby="helpId"
          v-model="state.newHouse.year"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="description"
          id="description"
          class="form-control"
          placeholder="Description"
          aria-describedby="helpId"
          v-model="state.newHouse.description"
        />
      </div>
      <button class="btn btn-success" type="submit">Create</button>
    </form>
    <div class="row justify-content-center">
      <House
        v-for="houseData in state.houses"
        :key="houseData._id"
        :house="houseData"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../Appstate'
import { housesService } from '../services/HousesService'
import House from '../components/House'
import { useRouter } from 'vue-router'

export default {
  name: 'Houses',
  setup() {
    const router = useRouter()
    const state = reactive({
      houses: computed(() => AppState.houses),
      newHouse: {}
    })

    onMounted(() => {
      housesService.getHouses()
    })

    return {
      state,
      async createHouse() {
        const houseId = await housesService.createHouse(state.newHouse)
        router.push({ name: 'HouseDetais', params: { id: houseId } })
        state.newHouse = {}
      }
    }
  },
  components: {
    House
  }
}
</script>

<style>
</style>
