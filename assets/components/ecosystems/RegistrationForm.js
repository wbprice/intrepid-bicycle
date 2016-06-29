import React, { PropTypes, Component } from 'react'

import {
  setRegistrationName,
  setRegistrationEmailAddress,
  setRegistrationInterests,
  submitRegistration
} from './../../redux/actions/registration-actions'

class RegistrationForm extends Component {

  setRegistrationName(event) {
    const name = event.target.value
    this.props.dispatch(setRegistrationName(name))
  }

  setRegistrationEmailAddress(event) {
    const emailAddress = event.target.value
    this.props.dispatch(setRegistrationEmailAddress(emailAddress))
  }

  setRegistrationInterests(event) {
    const interests = event.target.value
    this.props.dispatch(setRegistrationInterests(interests))
  }

  submitRegistration(event) {
    event.preventDefault()
    this.props.dispatch(submitRegistration(this.props.registration))
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
            value={this.props.registration.name}
            id="name"
            type="text"
            placeholder="Name" />

          <label htmlFor="email">Email</label>
          <input
            onChange={this.setRegistrationEmailAddress.bind(this)}
            value={this.props.registration.emailAddress}
            id="email"
            type="email"
            placeholder="Email" />

          <label htmlFor="interests">Interests</label>
          <textarea
            onChange={this.setRegistrationInterests.bind(this)}
            value={this.props.registration.interests}
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
