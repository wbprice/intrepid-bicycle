import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import ClassesManager from './../ecosystems/ClassesManager'

class Admin extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <section>
        <h1>Administration Panel</h1>
        <ClassesManager
          classes={this.props.classes}
          dispatch={this.props.dispatch} />
      </section>
    )
  }

}

Admin.propTypes = {
  classes: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    classes: state.classes
  })
)(Admin)
