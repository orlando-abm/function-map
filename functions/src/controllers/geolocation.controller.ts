import IStockLocations from '../interfaces/stockLocation.interfaces'
import { getCollectioData } from '../services/firebase.service'
import { isCoordinateInPolygon } from '../services/geolocation.service'

export const polygonContainsCoordiate = async (address: string) => {
  let store: IStockLocations | null = null
  const responseColletion: Array<IStockLocations> = await getCollectioData('stock_location')
  for (const stockLocation of responseColletion) {
    if (stockLocation.polygons) {
      const responseContains = await isCoordinateInPolygon(address, stockLocation.polygons)
      if (responseContains) return store = stockLocation
    }
  }
  return store
}
