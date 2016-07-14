import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Popover from 'react-popover'
import LoginForm from '../ecosystems/LoginForm.js'

import {
  logout
} from './../../redux/actions/login-actions'

class HeaderLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  togglePopover() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  logout() {
    this.setState({
      isOpen: false
    })
    this.props.dispatch(logout())
  }

  render() {
    return (
      <section className="app-header-login">
        {
          this.props.login.isLoggedIn ?
          <div className="app-header-profile">
            <span className="app-header-profile-username">{this.props.login.user.name}</span>
            <button
              onClick={this.logout.bind(this)}
              className="pure-button">Logout</button>
          </div>
          :
          <Popover
            isOpen={this.state.isOpen}
            onOuterAction={this.togglePopover.bind(this)}
            body={
              <div>
                {
                  this.props.login.error &&
                  <span className="warning-text">{this.props.login.error}</span>
                }
                <LoginForm dispatch={this.props.dispatch}/>
              </div>
            }>
            <button
              onClick={this.togglePopover.bind(this)}
              className="pure-button pure-button-primary">Login</button>
          </Popover>
        }
      </section>
    )
  }

}

HeaderLogin.propTypes = {
  login: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    login: state.login
  })
)(HeaderLogin)
