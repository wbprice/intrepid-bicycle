import { combineReducers } from 'redux'

import admin from './admin-reducer'
import registration from './registration-reducer'
import alerts from './alerts-reducer'
import course from './course-reducer'
import coursework from './coursework-reducer'
import login from './login-reducer'

export default combineReducers({
  admin,
  alerts,
  registration,
  course,
  coursework,
  login
})
