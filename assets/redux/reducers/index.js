import { combineReducers } from 'redux'

import admin from './admin-reducer'
import registration from './registration-reducer'
import alerts from './alerts-reducer'
import classes from './classes-reducer'
import coursework from './coursework-reducer'

export default combineReducers({
  admin,
  alerts,
  registration,
  classes,
  coursework
})
