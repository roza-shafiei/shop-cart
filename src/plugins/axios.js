import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
axiosConfig.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const { response } = error
    if (response?.status) {
      switch (response.status) {
        case 401:
          localStorage.removeItem('token')
          this.$router.push('/login')
          break
        case 403:
          // Forbidden
          console.error('Access denied')
          break
        case 404:
          // Not found
          console.error('Resource not found')
          break
        case 500:
          // Server error
          console.error('Server error')
          break
        default:
          console.error('An error occurred:', error.message)
      }
    }
    return Promise.reject(error)
  },
)
export default axiosConfig
