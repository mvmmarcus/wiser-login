export enum AuthTypes {
  LOGIN_USER = '@auth/LOGIN_USER',
  LOGIN_USER_SUCCESS = '@auth/LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE = '@auth/LOGIN_USER_FAILURE'
}

export interface LoginPayload {
  email: string
  password: string
}

export interface Auth {
  access_token: string | null
}

export interface AuthState {
  token: string | null
  error: string | null
}
