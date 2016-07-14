import React, { PropTypes, Component } from 'react'

import NewCourseForm from './../organisms/NewCourseForm'

import {
  fetchCourses,
  deleteCourse
} from './../../redux/actions/courses-actions'

class CoursesManager extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCourses())
  }

  deleteClass(classId) {
    this.props.dispatch(deleteCourse(classId))
  }

  editClass(classId) {
    console.log('unimplemented')
  }

  render() {
    return (
      <section>
        <h2>Courses</h2>
        <NewCourseForm dispatch={this.props.dispatch} />
        <CoursesList courses={this.props.courses} />
      </section>
    )
  }

}

CoursesManager.propTypes = {
  courses: PropTypes.array,
  dispatch: PropTypes.func
}

export default CoursesManager
