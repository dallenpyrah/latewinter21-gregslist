<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 card m-5 shadow-lg bg-dark text-light">
        <div class="card-body">
          <h4 class="card-title">Company: {{ state.jobs.company }}</h4>
          <h6 class="card-title">Job Title: {{ state.jobs.jobTitle }}</h6>
          <h6 class="card-title">Hours: {{ state.jobs.hours }}</h6>
          <h6 class="card-title">Rate: {{ state.jobs.rate }}</h6>
          <h6 class="card-title">Description: {{ state.jobs.description }}</h6>
          <button class="btn btn-danger" @click="deleteJob">Delete</button>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../Appstate'
import { jobsService } from '../services/JobsService'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'JobDetails',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      jobs: computed(() => AppState.jobs)
    })
    onMounted(() => {
      jobsService.getJob(route.params.id)
    })
    return {
      route,
      state,
      async deleteJob() {
        await jobsService.deleteJob(state.jobs._id)
        router.push({ name: 'Jobs' })
      }
    }
  },
  components: {}
}
</script>

<style>
</style>
