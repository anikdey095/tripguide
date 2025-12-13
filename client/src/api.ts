import axios from 'axios'

const BASE = (import.meta.env.VITE_API_URL as string) || 'http://localhost:5000'

const api = axios.create({
  baseURL: BASE,
  headers: { 'Content-Type': 'application/json' }
})

export default api
