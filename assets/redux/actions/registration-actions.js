import fetch from 'isomorphic-fetch'
import checkStatus from './../util/check-status'

import {
  addGlobalAlert
} from './alerts-actions'

export const SET_REGISTRATION_NAME = 'SET_REGISTRATION_NAME'
export const SET_REGISTRATION_EMAIL_ADDRESS = 'SET_REGISTRATION_EMAIL_ADDRESS'
export const SET_REGISTRATION_INTERESTS = 'SET_REGISTRATION_INTERESTS'

export function setRegistrationName(name) {
  return {
    type: SET_REGISTRATION_NAME,
    name
  }
}

export function setRegistrationEmailAddress(emailAddress) {
  return {
    type: SET_REGISTRATION_EMAIL_ADDRESS,
    emailAddress
  }
}

export function setRegistrationInterests(interests) {
  return {
    type: SET_REGISTRATION_INTERESTS,
    interests
  }
}

export const SUBMIT_REGISTRATION_REQUEST = 'SUBMIT_REGISTRATION_REQUEST'
export const SUBMIT_REGISTRATION_SUCCESS = 'SUBMIT_REGISTRATION_SUCCESS'
export const SUBMIT_REGISTRATION_FAILURE = 'SUBMIT_REGISTRATION_FAILURE'

export function submitRegistrationRequest() {
  return {
    type: SUBMIT_REGISTRATION_REQUEST
  }
}

export function submitRegistrationSuccess(response) {
  return {
    type: SUBMIT_REGISTRATION_SUCCESS,
    response
  }
}

export function submitRegistrationFailure(error) {
  return {
    type: SUBMIT_REGISTRATION_FAILURE,
    error
  }
}

export function submitRegistration(registration) {

  return dispatch => {
    dispatch(submitRegistrationRequest())
    return fetch('/student/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: registration.name,
        emailAddress: registration.emailAddress,
        interests: registration.interests
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(submitRegistrationSuccess(response))
      dispatch(addGlobalAlert(
        'Your registration was submitted! A mentor will review your application ' +
        ' and get back to you shortly!',
        'success'
      ))
    })
    .catch(error => {
      dispatch(submitRegistrationFailure(error))
      dispatch(addGlobalAlert(
        'An account with that email address already exists.',
        'danger'
      ))
    })

  }

}
