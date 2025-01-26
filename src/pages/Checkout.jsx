// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import useQuery from '../hooks/useQuery'
import { useEffect } from 'react'
import { useOrderStatus } from '../service/query/checkout'

// ref = c054781a-c447-4c14-9238-db4c6ac8baa4

export default function Checkout() {
  const { id } = useParams()
  const query = useQuery()
  const ref = query.get('ref')
  const { data, isSuccess, isError, error } = useOrderStatus(ref)

  useEffect(() => {
    if (isSuccess) console.log(data)
    if (isError) console.log(error)
  }, [isSuccess, isError])
  return (
    <div>
      <h1>Payment {id ? id : 0}</h1>
      <p>{ref ? ref : 'N/A'}</p>
    </div>
  )
}
