import { serviceV1 } from '.'

export const authApi = {
  async login({ email, password }) {
    return (await serviceV1.post('/auth/signin', { email, password })).data
  },
  async status() {
    return (await serviceV1.get('/auth/status')).data
  },
  async logout() {
    return (await serviceV1.post('/auth/logout')).data
  },
}
