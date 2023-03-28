import * as geolib from 'geolib'
import { getCoordinates } from '../utils/geocoder'

export const isCoordinateInPolygon = async (address: string, polygon: any): Promise<boolean> => {
  const coordinates = await getCoordinates(address)
  if (!coordinates) return false
  return geolib.isPointInPolygon(coordinates, polygon)
}
