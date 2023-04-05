import axios from "axios";

export default async function () {
  const res = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=jfhpZIbfdDVGKSNbIzVmeXUVt4kcaibRCKoj4iuw"
  )

  return res.data
}
