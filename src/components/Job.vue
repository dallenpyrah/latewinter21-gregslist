<template>
  <div class="col-3 card m-3 shadow-lg bg-dark text-light">
<router-link :to="{name: 'JobDetails', params:{id: job._id}}">
        <div class="card-body">
          <h4 class="card-title">Company: {{job.company}}</h4>
          <h6 class="card-title">Job Title: {{job.jobTitle}}</h6>
          <p class="card-text"></p>
        </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: {
    job: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style>

</style>
