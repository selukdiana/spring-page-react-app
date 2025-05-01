import axios from 'axios'

const $api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080/api',
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (err) => {
    const originalRequest = err.config
    if (err.response.status === 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get('http://localhost:8080/api/refresh', {
          withCredentials: true,
        })
        localStorage.setItem('accessToken', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (error) {
        console.log(error)
      }
    }
    throw err
  }
)

export default $api
