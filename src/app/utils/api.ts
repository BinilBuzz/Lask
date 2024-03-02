import axios, { AxiosError } from 'axios'


const api = axios.create({
  baseURL: `https://${process.env.API_URL}/api/`,
})

export default api
