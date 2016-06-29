import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Router, Route, Link, browserHistory } from 'react-router'

import Admin from './components/environments/Admin'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>
), document.getElementById('root'))
