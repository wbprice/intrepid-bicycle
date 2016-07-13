import React, { PropTypes, Component } from 'react'
import LoginForm from '../ecosystems/LoginForm.js'
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    return (
      <section>
        <LoginForm dispatch={this.props.dispatch} />
      </section>
    )
  }

}

Login.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(Login)
