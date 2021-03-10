import { AppState } from '../Appstate'
import { sandboxApi } from './AxiosService'

class JobsService {
  async getJobs() {
    try {
      const res = await sandboxApi.get('jobs')
      console.log(res)
      AppState.jobs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getJob(id) {
    try {
      const res = await sandboxApi.get('jobs/' + id)
      console.log(res)
      AppState.jobs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(newJob) {
    try {
      const res = await sandboxApi.post('jobs', newJob)
      AppState.jobs.push(newJob)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  async deleteJob(id) {
    try {
      await sandboxApi.delete('jobs/' + id)
      this.getJobs()
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobsService = new JobsService()
