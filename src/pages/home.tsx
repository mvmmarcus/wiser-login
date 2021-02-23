import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import PrivateRoute from 'components/Atoms/WithPrivateRoute'

import { logoutUserService } from 'services/auth'

import * as AuthActions from 'store/ducks/auth/actions'

const Home = () => {
  return (
    <div>
      <h1>Authenticated page</h1>

      <button onClick={logoutUserService}>Logout</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch)

export default connect(mapDispatchToProps)(PrivateRoute(Home))
