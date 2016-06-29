export const ADD_GLOBAL_ALERT = 'ADD_GLOBAL_ALERT'
export const REMOVE_GLOBAL_ALERT = 'REMOVE_GLOBAL_ALERT'

export function addGlobalAlert(text, severity) {
  return {
    type: ADD_GLOBAL_ALERT,
    text,
    severity
  }
}

export function removeGlobalAlert(index) {
  return {
    type: REMOVE_GLOBAL_ALERT,
    index
  }
}
