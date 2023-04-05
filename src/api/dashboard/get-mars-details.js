import axios from "axios"

export default async function (payload) {
  const { date } = payload

  const res = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=navcam&page=1&api_key=jfhpZIbfdDVGKSNbIzVmeXUVt4kcaibRCKoj4iuw`
  )

  return res.data
}