import React, { PropTypes, Component } from 'react'

import {
  submitRegistration
} from './../../redux/actions/registration-actions'

class RegistrationForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      emailAddress: '',
      interests: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  setRegistrationName(event) {
    const name = event.target.value
    this.setState({
      name
    })
  }

  setRegistrationEmailAddress(event) {
    const emailAddress = event.target.value
    this.setState({
      emailAddress
    })
  }

  setRegistrationInterests(event) {
    const interests = event.target.value
    this.setState({
      interests
    })
  }

  setPassword(event) {
    const password = event.target.value
    this.setState({
      password
    })
  }

  setPasswordConfirmation(event) {
    const passwordConfirmation = event.target.value
    this.setState({
      passwordConfirmation
    })
  }

  submitRegistration(event) {
    event.preventDefault()

    if (this.state.password !== this.state.passwordConfirmation) {

    }

    else {
      this.props.dispatch(submitRegistration(this.state))
    }

  }

  render() {

    return (
      <form
        onSubmit={this.submitRegistration.bind(this)}
        className="pure-form pure-form-stacked">
        <fieldset>
          <legend>Student Registration</legend>

          <label htmlFor="name">Name</label>
          <input
            onChange={this.setRegistrationName.bind(this)}
            value={this.state.name}
            id="name"
            type="text"
            placeholder="Name" />

          <label htmlFor="email">Email</label>
          <input
            onChange={this.setRegistrationEmailAddress.bind(this)}
            value={this.state.emailAddress}
            id="email"
            type="email"
            placeholder="Email" />

          <label htmlFor="password">Password</label>
          <input
            onChange={this.setPassword.bind(this)}
            value={this.state.password}
            id="password"
            type="password"
            placeholder="Password" />

          <label htmlFor="passwordConfirmation">Retype Password</label>
          <input
            onChange={this.setPasswordConfirmation.bind(this)}
            value={this.state.passwordConfirmation}
            id="passwordConfirmation"
            type="password"
            placeholder="Retype Password" />

          <label htmlFor="interests">Interests</label>
          <textarea
            onChange={this.setRegistrationInterests.bind(this)}
            value={this.state.interests}
            id="interests"
            placeholder="What do you want to learn about?"></textarea>

          <button
            type="submit"
            className="pure-button pure-button-primary">Register</button>

        </fieldset>
      </form>
    )

  }

}

RegistrationForm.propTypes = {
  setRegistrationName: PropTypes.func,
  setRegistrationEmailAddress: PropTypes.func,
  setRegistrationInterests: PropTypes.func,
  submitRegistration: PropTypes.func,
  registration: PropTypes.object,
  dispatch: PropTypes.func
}

export default RegistrationForm
