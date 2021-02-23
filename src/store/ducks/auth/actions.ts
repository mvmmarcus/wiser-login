import { AuthTypes } from './types'

export const loginUserAction = (payload: {
  email: string
  password: string
}) => {
  return {
    type: AuthTypes.LOGIN_USER,
    payload
  }
}
