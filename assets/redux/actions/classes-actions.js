import checkStatus from './../util/check-status'

export const SUBMIT_NEW_CLASS_REQUEST = 'SUBMIT_NEW_CLASS_REQUEST'
export const SUBMIT_NEW_CLASS_SUCCESS = 'SUBMIT_NEW_CLASS_SUCCESS'
export const SUBMIT_NEW_CLASS_FAILURE = 'SUBMIT_NEW_CLASS_FAILURE'

export function submitNewClassRequest() {
  return {
    type: SUBMIT_NEW_CLASS_REQUEST
  }
}

export function submitNewClassSuccess(response) {
  return {
    type: SUBMIT_NEW_CLASS_SUCCESS,
    response
  }
}

export function submitNewClassFailure(error) {
  return {
    type: SUBMIT_NEW_CLASS_FAILURE,
    error
  }
}

export function submitNewClass(newClass) {

  return dispatch => {
    dispatch(submitNewClassRequest())
    return fetch('/api/v1/classes', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newClass.title,
        description: newClass.description,
        shortcode: newClass.shortcode
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(submitNewClassSuccess(response))
    })
    .catch(error => {
      dispatch(submitNewClassFailure(error))
    })
  }

}

export const FETCH_CLASSES_REQUEST = 'FETCH_CLASSES_REQUEST'
export const FETCH_CLASSES_SUCCESS = 'FETCH_CLASSES_SUCCESS'
export const FETCH_CLASSES_FAILURE = 'FETCH_CLASSES_FAILURE'

export function fetchClassesRequest() {
  return {
    type: FETCH_CLASSES_REQUEST
  }
}

export function fetchClassesSuccess(response) {
  return {
    type: FETCH_CLASSES_SUCCESS,
    response
  }
}

export function fetchClassesFailure(error) {
  return {
    type: FETCH_CLASSES_FAILURE,
    error
  }
}

export function fetchClasses() {
  return dispatch => {
    dispatch(fetchClassesRequest())
    return fetch('/api/v1/classes', {
      method: 'get'
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchClassesSuccess(response))
    })
    .catch(error => {
      dispatch(fetchClassesFailure(error))
    })
  }
}

export const DELETE_CLASS_REQUEST = 'DELETE_CLASS_REQUEST'
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS'
export const DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE'

export function deleteClassRequest() {
  return {
    type: DELETE_CLASS_REQUEST
  }
}

export function deleteClassSuccess(response) {
  return {
    type: DELETE_CLASS_SUCCESS,
    response
  }
}

export function deleteClassFailure(error) {
  return {
    type: DELETE_CLASS_FAILURE,
    error
  }
}

export function deleteClass(classid) {
  return dispatch => {
    dispatch(deleteClassRequest())
    return fetch(`/api/v1/classes/${classid}`, {
      method: 'delete'
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(deleteClassSuccess(response))
    })
    .catch(error => {
      dispatch(deleteClassFailure(error))
    })
  }
}
