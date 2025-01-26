import { serviceV1 } from '.'

export const checkoutApi = {
  async orderStatus({ ref }) {
    return (await serviceV1.get(`/checkout/orders/${ref}`)).data
  },
}
