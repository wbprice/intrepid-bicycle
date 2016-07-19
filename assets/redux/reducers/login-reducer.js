import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESTORE
} from './../actions/login-actions'

import {
  JOIN_COURSE_SUCCESS,
  FETCH_USER_COURSES_SUCCESS,
  QUIT_COURSE_SUCCESS
} from './../actions/courses-actions'

const intialState = {
  isLoggedIn: false,
  user: {},
  error: ''
}

export default function logiReducer(state = intialState, action) {

  switch (action.type) {

  case LOGOUT:
    return intialState

  case LOGIN_FAILURE:
    return Object.assign({}, {
      error: 'There was an error'
    })

  case LOGIN_RESTORE:
  case LOGIN_SUCCESS:
    return Object.assign({}, {
      isLoggedIn: true,
      user: action.response && action.response.user || JSON.parse(action.user),
      error: ''
    })

  case JOIN_COURSE_SUCCESS:
  case FETCH_USER_COURSES_SUCCESS:
  case QUIT_COURSE_SUCCESS:
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, {
        courses: action.response.courses
      })
    })

  default:
    return state
  }

}
