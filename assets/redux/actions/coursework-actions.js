import fetch from 'isomorphic-fetch'
import checkStatus from './../util/check-status'
import mime from 'mime'
import uuid from 'node-uuid'
import Promise from 'bluebird'

export const ADD_COURSEWORK_FILES = 'ADD_COURSEWORK_FILES'
export const REMOVE_COURSEWORK_FILE = 'REMOVE_COURSEWORK_FILE'

export function addCourseworkFiles(fileList) {
  return {
    type: ADD_COURSEWORK_FILES,
    fileList
  }
}

export function removeCourseworkFile(name) {
  return {
    type: REMOVE_COURSEWORK_FILE,
    name
  }
}

export const UPLOAD_COURSEWORK_FILES_REQUEST = 'UPLOAD_COURSEWORK_FILES_REQUEST'
export const UPLOAD_COURSEWORK_FILES_SUCCESS = 'UPLOAD_COURSEWORK_FILES_SUCCESS'
export const UPLOAD_COURSEWORK_FILES_FAILURE = 'UPLOAD_COURSEWORK_FILES_FAILURE'

export function uploadCourseworkFilesRequest() {
  return {
    type: UPLOAD_COURSEWORK_FILES_REQUEST
  }
}

export function uploadCourseworkFilesSuccess(response) {
  return {
    type: UPLOAD_COURSEWORK_FILES_SUCCESS,
    response
  }
}

export function uploadCourseworkFilesFailure(error) {
  return {
    type: UPLOAD_COURSEWORK_FILES_FAILURE,
    error
  }
}

export function uploadCourseworkFiles(files) {
  return dispatch => {

    dispatch(uploadCourseworkFilesRequest())

    const token = localStorage.getItem('auth_token')

    return Promise.map(files, file => {

      const filetype = mime.lookup(file.name)

      return fetch(`/signS3?filename=${uuid.v4()}&filetype=${filetype}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(checkStatus)
      .then(response => response.json())
      .then(response => {
        return fetch(response.signed_request, {
          method: 'put',
          body: file
        })
      })
    })
    .then(response => {
      dispatch(uploadCourseworkFilesSuccess(response))
    })
    .catch(error => {
      dispatch(uploadCourseworkFilesFailure(error))
    })
  }
}
