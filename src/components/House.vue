<template>
  <div class="col-3 card m-3 shadow-lg bg-dark text-light">
<router-link :to="{name: 'HouseDetails', params:{id: house._id}}">
        <img class="card-img-top p-4" :src="house.imgUrl" alt="house">
        <div class="card-body">
          <h4 class="card-title">Price: {{house.price}}</h4>
          <p class="card-text"></p>
        </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'house',
  props: {
    house: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style>

</style>
