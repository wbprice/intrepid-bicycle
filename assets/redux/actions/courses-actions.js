import checkStatus from './../util/check-status'

export const SUBMIT_NEW_COURSE_REQUEST = 'SUBMIT_NEW_COURSE_REQUEST'
export const SUBMIT_NEW_COURSE_SUCCESS = 'SUBMIT_NEW_COURSE_SUCCESS'
export const SUBMIT_NEW_COURSE_FAILURE = 'SUBMIT_NEW_COURSE_FAILURE'

export function submitNewCourseRequest() {
  return {
    type: SUBMIT_NEW_COURSE_REQUEST
  }
}

export function submitNewCourseSuccess(response) {
  return {
    type: SUBMIT_NEW_COURSE_SUCCESS,
    response
  }
}

export function submitNewCourseFailure(error) {
  return {
    type: SUBMIT_NEW_COURSE_FAILURE,
    error
  }
}

export function submitNewCourse(newCourse) {

  const token = localStorage.getItem('auth_token')

  return dispatch => {
    dispatch(submitNewCourseRequest())
    return fetch('/api/v1/course', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newCourse.title,
        description: newCourse.description,
        shortcode: newCourse.shortcode
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(submitNewCourseSuccess(response))
    })
    .catch(error => {
      dispatch(submitNewCourseFailure(error))
    })
  }

}

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST'
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE'

export function fetchCoursesRequest() {
  return {
    type: FETCH_COURSES_REQUEST
  }
}

export function fetchCoursesSuccess(response) {
  return {
    type: FETCH_COURSES_SUCCESS,
    response
  }
}

export function fetchCoursesFailure(error) {
  return {
    type: FETCH_COURSES_FAILURE,
    error
  }
}

export function fetchCourses() {

  const token = localStorage.getItem('auth_token')

  return dispatch => {
    dispatch(fetchCoursesRequest())
    return fetch('/api/v1/course', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchCoursesSuccess(response))
    })
    .catch(error => {
      dispatch(fetchCoursesFailure(error))
    })
  }
}

export const DELETE_CLASS_REQUEST = 'DELETE_CLASS_REQUEST'
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS'
export const DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE'

export function deleteCourseRequest() {
  return {
    type: DELETE_CLASS_REQUEST
  }
}

export function deleteCourseSuccess(response) {
  return {
    type: DELETE_CLASS_SUCCESS,
    response
  }
}

export function deleteCourseFailure(error) {
  return {
    type: DELETE_CLASS_FAILURE,
    error
  }
}

export function deleteCourse(courseid) {

  const token = localStorage.getItem('auth_token')

  return dispatch => {
    dispatch(deleteCourseRequest())
    return fetch(`/api/v1/course/${courseid}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      method: 'delete'
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(deleteCourseSuccess(response))
    })
    .catch(error => {
      dispatch(deleteCourseFailure(error))
    })
  }
}

export const JOIN_COURSE_REQUEST = 'JOIN_COURES_REQUEST'
export const JOIN_COURSE_SUCCESS = 'JOIN_COURSE_SUCCESS'
export const JOIN_COURSE_FAILURE = 'JOIN_COURSE_FAILURE'

export function joinCourseRequest() {
  return {
    type: JOIN_COURSE_REQUEST
  }
}

export function joinCourseSuccess(response) {
  return {
    type: JOIN_COURSE_SUCCESS,
    response
  }
}

export function joinCourseFailure(error) {
  return {
    type: JOIN_COURSE_FAILURE,
    error
  }
}

export function joinCourse(studentId, courseId) {

  const token = localStorage.getItem('auth_token')

  return dispatch => {
    dispatch(joinCourseRequest())
    return fetch('/course/join', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        studentId,
        courseId
      }
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(joinCourseSuccess(response))
    })
    .catch(error => {
      dispatch(joinCourseFailure(error))
    })
  }

}
