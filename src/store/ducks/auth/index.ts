import { Reducer } from 'redux'

import { AuthState, AuthTypes } from './types'

const isMounted = typeof window !== 'undefined'

const INITIAL_STATE: AuthState = {
  token: isMounted ? localStorage.getItem('token') : null,
  error: null
}

const reducer: Reducer<AuthState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case AuthTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: payload,
        error: null
      }
    case AuthTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: payload,
        token: null
      }

    default:
      return state
  }
}

export default reducer
