import React from 'react'
import { render } from 'react-dom'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import { createStore,  applyMiddleware } from 'redux'
import appReducer from './redux/reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import fetch from 'isomorphic-fetch'

import App from './components/App'
import Admin from './components/environments/Admin'
import Home from './components/environments/Home'
import Registration from './components/environments/Registration'
import Coursework from './components/environments/Coursework'
import Login from './components/environments/Login'

const logger = createLogger()
const store = createStore(
  appReducer,
  applyMiddleware(thunk, logger)
)

import 'purecss/build/pure-min.css'
import './styles/style.css'

function requireAuth(nextState, replace, cb) {

  const token = localStorage.getItem('auth_token')

  return fetch(`/auth/verify?auth_token=${token}`)
  .then(response => {

    if (!response.ok) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }

    cb()

  })


}

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} onEnter={requireAuth}/>
        <Route path="/registration" component={Registration} />
        <Route path="/coursework" component={Coursework} onEnter={requireAuth} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
