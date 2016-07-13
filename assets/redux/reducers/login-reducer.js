import {
  LOGOUT,
  LOGIN_SUCCESS
} from './../actions/login-actions'

const intialState = {
  isLoggedIn: false,
  user: {}
}

export default function logiReducer(state = intialState, action) {

  switch (action.type) {

  case LOGOUT:
    return intialState

  case LOGIN_SUCCESS:
    return Object.assign({}, {
      isLoggedIn: true,
      user: action.response.user
    })

  default:
    return state
  }

}
