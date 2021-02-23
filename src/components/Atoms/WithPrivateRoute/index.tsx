/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from 'store'
import { Spinner } from '../Spinner/styles'
import { LoginPayload } from 'store/ducks/auth/types'

import * as AuthActions from 'store/ducks/auth/actions'

interface StateProps {
  token: string | null
  error: string | null
}

interface DispatchProps {
  loginUserAction: (payload: LoginPayload) => void
}

interface PrivateProps {
  Component: () => JSX.Element
}

type Props = StateProps & DispatchProps & PrivateProps

const WithAuth = ({ Component, token }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      Router.push('/')
    } else if (token) {
      setIsLoading(false)
    }
  }, [token, isLoading])

  return isLoading ? <Spinner size={40} /> : <Component />
}

const mapStateToProps = ({ auth }: ApplicationState) => ({
  token: auth.token,
  error: auth.error
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch)

const CustomComponent = connect(mapStateToProps, mapDispatchToProps)(WithAuth)

const PrivateRoute = (Component: any) => () => (
  <CustomComponent Component={Component} />
)

export default PrivateRoute
