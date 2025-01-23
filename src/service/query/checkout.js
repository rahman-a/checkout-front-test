// @ts-nocheck
import { useQuery } from 'react-query'
import api from '../api'

export const useOrderStatus = (ref) => {
  return useQuery({
    queryKey: ['order-status', ref],
    queryFn: () => api.checkout.orderStatus({ ref }),
  })
}
