import {
  SET_REGISTRATION_NAME,
  SET_REGISTRATION_EMAIL_ADDRESS,
  SET_REGISTRATION_INTERESTS
} from './../actions/registration-actions'

const initialState = {
  name: '',
  emailAddress: '',
  interests: ''
}

export default function registerReducer (state = initialState, action) {

  switch (action.type) {

  case SET_REGISTRATION_NAME:
    return Object.assign({}, state, {name: action.name})

  case SET_REGISTRATION_EMAIL_ADDRESS:
    return Object.assign({}, state, {emailAddress: action.emailAddress})

  case SET_REGISTRATION_INTERESTS:
    return Object.assign({}, state, {interests: action.interests})

  default:
    return state
  }

}
