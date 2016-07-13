import fetch from 'isomorphic-fetch'
import checkStatus from './../util/check-status'

export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function logout() {
  localStorage.removeItem('auth_token')
  return {
    type: LOGOUT
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function login(emailAddress, plaintextPassword) {
  return dispatch => {
    dispatch(loginRequest())
    return fetch('/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailAddress,
        plaintextPassword
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      localStorage.setItem('auth_token', response.token)
      dispatch(loginSuccess(response))
    })
    .catch(error => {
      dispatch(loginFailure(error))
    })
  }
}
