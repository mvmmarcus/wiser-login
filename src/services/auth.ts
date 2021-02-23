import Router from 'next/router'

import api from './api'

export const loginUserService = (payload: {
  email: string
  password: string
}) => {
  const LOGIN_API_ENDPOINT = '/auth/login'

  return api.post(LOGIN_API_ENDPOINT, payload).then((response) => {
    return response.data
  })
}

export const logoutUserService = () => {
  const isMounted = typeof window !== 'undefined'

  if (isMounted) localStorage.removeItem('token')
  Router.push('/')
}
