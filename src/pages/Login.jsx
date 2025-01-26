// @ts-nocheck
import { useEffect, useRef } from 'react'
import { useAuthLogin } from '../service/query/auth'

// @ts-nocheck
export default function Login() {
  const formRef = useRef(null)
  const { mutate, data, isError, isLoading, isSuccess, error } = useAuthLogin()
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = formRef.current.email.value
    const password = formRef.current.password.value
    mutate({ email, password })
  }

  useEffect(() => {
    if (isSuccess) {
      console.log('data', data)
    }
  }, [data, isSuccess])

  return (
    <div>
      <h1>Login</h1>
      {isError && <p>{error.message}</p>}
      <form className='login-form' ref={formRef} onSubmit={handleSubmit}>
        <input type='text' placeholder='email' name='email' />
        <input type='password' placeholder='password' name='password' />
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
