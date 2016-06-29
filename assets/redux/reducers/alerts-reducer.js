import {
  ADD_GLOBAL_ALERT,
  REMOVE_GLOBAL_ALERT
} from './../actions/alerts-actions'

const initialState = []

export default function alertsReducer (state = initialState, action) {

  switch (action.type) {

  case ADD_GLOBAL_ALERT:
    return [
      ...state,
      {
        id: state.length + 1,
        text: action.text,
        severity: action.severity
      }
    ]

  case REMOVE_GLOBAL_ALERT:
    return state.filter(alert => {
      return alert.id !== action.id
    })

  default:
    return state

  }

}
