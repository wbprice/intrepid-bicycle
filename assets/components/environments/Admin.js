import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import CoursesManager from './../ecosystems/CoursesManager'

class Admin extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <section>
        <h1>Administration Panel</h1>
        <CoursesManager
          courses={this.props.courses}
          dispatch={this.props.dispatch} />
      </section>
    )
  }

}

Admin.propTypes = {
  courses: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    courses: state.courses
  })
)(Admin)
