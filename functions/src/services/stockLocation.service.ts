import IStockLocations from '../interfaces/stockLocation.interfaces'
import axios from 'axios'

export const getStockLocationsService = async (): Promise<Array<IStockLocations>> => {
  const stockLocationsResponse = await axios.get('https://lomi.cl//api/v1/stock_locations?token=8b9c307dd89928cc60e8e59d2233dbafc7618f26c52fa5d3')
  const { data } = stockLocationsResponse
  const stockLocations: Array<IStockLocations> = data.stock_locations
  return stockLocations
}
