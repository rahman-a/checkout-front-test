// @ts-nocheck
import { useMutation, useQuery } from 'react-query'
import api from '../api'

export const useAuthLogin = () => {
  return useMutation({
    mutationKey: ['authLogin'],
    mutationFn: ({ email, password }) => api.auth.login({ email, password }),
  })
}

export const useAuthStatus = () => {
  return useQuery({
    queryKey: ['authStatus'],
    queryFn: () => api.auth.status(),
  })
}

export const useAuthLogout = () => {
  return useMutation({
    mutationKey: ['authLogout'],
    mutationFn: () => api.auth.logout(),
  })
}
