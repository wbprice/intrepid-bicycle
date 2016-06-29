import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

class Admin extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <pre>Admin Panel</pre>
    )
  }

}

export default connect(
  state => ({
    state: state
  })
)(Admin)
