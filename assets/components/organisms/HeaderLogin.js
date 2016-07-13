import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Popover from 'react-popover'
import LoginForm from '../ecosystems/LoginForm.js'

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

  render() {
    return (
      <section className="app-header-login">
        {
          this.props.login.user.name ?
          <span>{this.props.login.user.name}</span>
          :
          <Popover
            isOpen={this.state.isOpen}
            onOuterAction={this.togglePopover.bind(this)}
            body={<LoginForm dispatch={this.props.dispatch}/>}>
            <button
              onClick={this.togglePopover.bind(this)}
              className="pure-button pure-button-primary button-xlarge">Login</button>
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
