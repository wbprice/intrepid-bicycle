import {
  SUBMIT_NEW_COURSE_SUCCESS,
  FETCH_COURSES_SUCCESS,
  DELETE_COURSES_SUCCESS
} from '../actions/courses-actions'

const initialState = []

export default function classReducer (state = initialState, action) {

  switch (action.type) {

  case SUBMIT_NEW_COURSE_SUCCESS:
    return [
      ...state,
      action.response
    ]

  case FETCH_COURSES_SUCCESS:
    return [
      ...action.response
    ]

  case DELETE_COURSES_SUCCESS:
    return state.filter(item => {
      return item.id !== action.response.id
    })

  default:
    return state

  }

}
