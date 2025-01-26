// @ts-nocheck
import axios from 'axios'
import { authApi } from './auth'
import { checkoutApi } from './checkout'

export const serviceV1 = axios.create({
  baseURL: '/api/v1',
})

serviceV1.interceptors.response.use(
  (response) => response,
  async (error) => {
    const fError = {
      code: error.response.status,
      message: error.response.data.message,
      name: error.response.data.name,
      success: false,
    }
    if (error.response.data.stack) fError.stack = error.response.data.stack
    return Promise.reject(fError)
  }
)

export default {
  auth: authApi,
  checkout: checkoutApi,
}
