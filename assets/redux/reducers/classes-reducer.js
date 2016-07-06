import {
  SUBMIT_NEW_CLASS_SUCCESS,
  FETCH_CLASSES_SUCCESS,
  DELETE_CLASS_SUCCESS
} from '../actions/classes-actions'

const initialState = []

export default function classReducer (state = initialState, action) {

  switch (action.type) {

  case SUBMIT_NEW_CLASS_SUCCESS:
    return [
      ...state,
      action.response
    ]

  case FETCH_CLASSES_SUCCESS:
    return [
      ...action.response
    ]

  case DELETE_CLASS_SUCCESS:
    return state.filter(item => {
      return item.id !== action.response.id
    })

  default:
    return state

  }

}
