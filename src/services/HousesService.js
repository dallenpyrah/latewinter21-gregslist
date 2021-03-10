import { AppState } from '../Appstate'
import { sandboxApi } from './AxiosService'

class HousesService {
  async getHouses() {
    try {
      const res = await sandboxApi.get('houses')
      console.log(res)
      AppState.houses = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getHouse(id) {
    try {
      const res = await sandboxApi.get('houses/' + id)
      console.log(res)
      AppState.houses = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(newHouse) {
    try {
      const res = await sandboxApi.post('houses', newHouse)
      AppState.houses.push(newHouse)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse(id) {
    try {
      await sandboxApi.delete('houses/' + id)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  async bid(id, body) {
    const house = AppState.houses.find(house => house.id === id)
    house.price += 100
    try {
      await sandboxApi.put('houses/' + id, body)
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()
