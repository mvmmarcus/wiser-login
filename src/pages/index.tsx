import { useState } from 'react'
import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Auth from 'components/Templates/Auth'
import { FormSignin } from 'components/Atoms'
import { ApplicationState } from 'store'
import { LoginPayload } from 'store/ducks/auth/types'

import * as AuthActions from 'store/ducks/auth/actions'

interface StateProps {
  token: string | null
  error: string | null
}

interface DispatchProps {
  loginUserAction: (payload: LoginPayload) => void
}

type Props = StateProps & DispatchProps

const Login = ({ loginUserAction }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = (values: { email: string; password: string }) => {
    setIsLoading(true)

    setTimeout(() => {
      loginUserAction(values)
      setIsLoading(false)
    }, 1500)
  }

  const hasToken = () => {
    const isMounted = typeof window !== 'undefined'
    const token = isMounted ? localStorage.getItem('token') : null

    if (token) {
      return Router.push('/home')
    }
  }

  return hasToken() ? null : (
    <Auth
      title="Olá, seja bem-vindo!"
      description="Para acessar a plataforma, faça seu login."
    >
      <FormSignin onSubmit={handleSubmit} isSubmiting={isLoading} />
    </Auth>
  )
}

const mapStateToProps = ({ auth }: ApplicationState) => ({
  token: auth.token,
  error: auth.error
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
