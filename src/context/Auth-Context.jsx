/* eslint-disable react/prop-types */
// @ts-nocheck
import { createContext, useContext } from 'react'
import { useAuthStatus } from '../service/query/auth'
import { useEffect } from 'react'
import { useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

export default function AuthProvider({ children }) {
  const [session, setSession] = useState({ user: null })
  const { data, isSuccess, isError, error } = useAuthStatus()
  useEffect(() => {
    if (isSuccess && data) {
      setSession({ user: data.user })
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (isError) {
      setSession({ user: null })
      console.log('Error: ', error)
    }
  }, [isError])
  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  )
}
