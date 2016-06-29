import React from 'react'
import { render } from 'react-dom'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import { createStore,  applyMiddleware } from 'redux'
import appReducer from './redux/reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import App from './components/App'
import Admin from './components/environments/Admin'
import Home from './components/environments/Home'
import Registration from './components/environments/Registration'

const logger = createLogger()
const store = createStore(
  appReducer,
  applyMiddleware(thunk, logger)
)

import 'purecss/build/pure-min.css'

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/registration" component={Registration} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
