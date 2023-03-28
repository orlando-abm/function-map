import axios from 'axios'

export const getCoordinates = async (address: string): Promise<any> => {
  if (!address) return {}
  const url = `${process.env.MAPS_URL}?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  const response = await axios.get(url)
  if (!response.data.results[0]) return {}
  const { geometry } = response.data.results[0]
  const location = geometry.location
  return location
}
