import axios from 'axios'
import { authApi } from './auth'
import { checkoutApi } from './checkout'

export const serviceV1 = axios.create({
  baseURL: '/api/v1',
})

export default {
  auth: authApi,
  checkout: checkoutApi,
}
