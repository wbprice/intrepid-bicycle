import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import RegistrationForm from '../ecosystems/RegistrationForm'

class Registration extends Component {

  render() {
    return (
      <article>
        <p>Thank you for interest in Intrepid Biped Potatogram.  You can sign up
           for classes by filling out this form.</p>
        <RegistrationForm
          registration={this.props.registration}
          dispatch={this.props.dispatch} />
      </article>
    )
  }

}

Registration.propTypes = {
  registration: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    registration: state.registration
  })
)(Registration)
