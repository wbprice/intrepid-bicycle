import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import CoursesList from './../ecosystems/CoursesList'

class Courses extends Component {

  render() {
    return (
      <CoursesList courses={this.props.courses} />
    )
  }

}

Component.propTypes = {
  courses: PropTypes.array
}

export default connect(
  state => ({
    courses: state.courses
  })
)(Courses)
