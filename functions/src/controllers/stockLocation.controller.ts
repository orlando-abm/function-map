import { createDoc, getDocRef, updateDoc } from '../services/firebase.service'
import { getStockLocationsService } from '../services/stockLocation.service'
import { getCoordinates } from '../utils/geocoder'

export const getStockLocations = async () => {
  const stockLocations = await getStockLocationsService()
  for (const stockLocation of stockLocations) {
    const coordinates = await getCoordinates(stockLocation.address1)
    const docRef = await getDocRef('stock_location', stockLocation.id.toString())
    const doc = await docRef.get()
    if (doc.exists) {
      updateDoc(docRef, {
        ...stockLocation,
        coordinates
      })
    } else {
      createDoc(docRef, {
        ...stockLocation,
        coordinates
      })
    }
  }
}
