import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { getStockLocations } from './controllers/stockLocation.controller'
import { polygonContainsCoordiate } from './controllers/geolocation.controller'

admin.initializeApp()
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true })
//   response.send('Hello from Firebase!')
// })


export const getStoresZones = functions.https.onRequest(async (_, response) => {
  try {
    getStockLocations()
    response.status(200).send('OK')
  } catch (error) {
    response.status(400).send(error)
  }
})

export const validateCoordinates = functions.https.onRequest(async (request, response) => {
  try {
    const { address } = request.body
    if (!address) response.status(400).send('La dirección es requerida')
    const stockLocation = await polygonContainsCoordiate(address)
    response.status(200).send(stockLocation? stockLocation: {})
  } catch (error) {
    response.status(400).send(error)
  }
})
