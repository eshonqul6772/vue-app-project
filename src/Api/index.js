import axios from 'axios'
import {getItem} from '../helpers/persistaneStorage'

axios.defaults.baseURL = 'http://localhost:9090/v1/e-ngo'

axios.interceptors.request.use(config => {
  const token = getItem('user')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

export default axios;