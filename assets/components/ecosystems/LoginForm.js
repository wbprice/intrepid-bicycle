import React, { PropTypes, Component } from 'react'
import {
  login
} from './../../redux/actions/login-actions'

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      plaintextPassword: ''
    }
  }

  setEmailAddress(event) {
    const emailAddress = event.target.value
    this.setState({
      emailAddress
    })
  }

  setPlaintextPassword(event) {
    const plaintextPassword = event.target.value
    this.setState({
      plaintextPassword
    })
  }

  login(event) {
    event.preventDefault()
    this.props.dispatch(login(this.state))
  }

  render() {
    return (
      <form
        onSubmit={this.login.bind(this)}
        className="pure-form pure-form-stacked"
        method="post"
        action="/login">
        <fieldset>
          <legend>Login to continue</legend>

          <label htmlFor="emailAddress">Email</label>
          <input
            onChange={this.setEmailAddress.bind(this)}
            value={this.state.emailAddress}
            id="emailAddress"
            type="email"
            name="emailAddress"
            placeholder="Email" />

          <label htmlFor="plaintextPassword">Password</label>
          <input
            onChange={this.setPlaintextPassword.bind(this)}
            value={this.state.plaintextPassword}
            id="plaintextPassword"
            type="password"
            name="plaintextPassword"
            placeholder="Password" />

          <button type="submit" className="pure-button pure-button-primary">Sign in</button>

        </fieldset>
      </form>
    )
  }

}

export default LoginForm
