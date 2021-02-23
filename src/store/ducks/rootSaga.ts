import { takeLatest } from 'redux-saga/effects'

import { loginUserSaga } from './auth/sagas'
import { AuthTypes } from './auth/types'

export default function* rootSaga() {
  yield takeLatest(AuthTypes.LOGIN_USER, loginUserSaga)
}
