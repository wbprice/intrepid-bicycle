import { combineReducers } from 'redux'

import admin from './admin-reducer'
import registration from './registration-reducer'
import alerts from './alerts-reducer'

export default combineReducers({
  admin,
  alerts,
  registration
})
