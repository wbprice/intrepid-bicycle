import React, { PropTypes, Component } from 'react'

import NewCourseForm from './../organisms/NewCourseForm'
import CoursesManagerList from './../ecosystems/CoursesManagerList'

import {
  fetchCourses
} from './../../redux/actions/courses-actions'

class CoursesManager extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCourses())
  }

  render() {
    return (
      <section>
        <h2>Courses</h2>
        <NewCourseForm
          dispatch={this.props.dispatch} />
        <CoursesManagerList
          dispatch={this.props.dispatch}
          courses={this.props.courses} />
      </section>
    )
  }

}

CoursesManager.propTypes = {
  courses: PropTypes.array,
  dispatch: PropTypes.func
}

export default CoursesManager
