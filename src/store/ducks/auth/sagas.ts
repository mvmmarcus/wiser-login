import Router from 'next/router'

import { call, put } from 'redux-saga/effects'

import toast from 'utils/toast/helpers'

import { loginUserService } from 'services/auth'
import { loginUserAction } from './actions'
import { AuthTypes } from './types'

interface ResponseError {
  response: {
    data: {
      status: number
      message: string
    }
  }
}

interface ResponseSuccess {
  access_token: string
}

const isMounted = typeof window !== 'undefined'

export function* loginUserSaga({
  payload
}: ReturnType<typeof loginUserAction>) {
  try {
    const response: ResponseSuccess = yield call(loginUserService, payload)

    yield put({
      type: AuthTypes.LOGIN_USER_SUCCESS,
      payload: response.access_token
    })

    if (isMounted) localStorage.setItem('token', response.access_token)
    Router.push('/home')
  } catch (error) {
    const responseError: ResponseError = error

    yield put({
      type: AuthTypes.LOGIN_USER_FAILURE,
      payload: responseError.response.data.message
    })

    if (isMounted) localStorage.removeItem('token')

    if (responseError.response.data.status === 401)
      toast.error(`Email ou senha incorreta!`)
  }
}
