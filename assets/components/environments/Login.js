import React, { PropTypes, Component } from 'react'
import LoginForm from '../ecosystems/LoginForm.js'
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    return (
      <section>
        {
          this.props.login.error &&
          <span className="warning-text">{this.props.login.error}</span>
        }
        <LoginForm dispatch={this.props.dispatch} />
      </section>
    )
  }

}

Login.propTypes = {
  dispatch: PropTypes.func,
  login: PropTypes.object
}

export default connect(
  state => ({
    login: state.login
  })
)(Login)
