import React, { PropTypes, Component } from 'react'

import {
  joinCourse,
  quitCourse
} from './../../redux/actions/courses-actions'

class CoursesList extends Component {

  joinClass(courseId) {
    this.props.dispatch(joinCourse(this.props.user.id, courseId))
  }

  quitCourse(courseId) {
    this.props.dispatch(quitCourse(this.props.user.id, courseId))
  }

  isUserEnrolled(courseId) {
    return this.props.user.courses.some(course => {
      return course.id === courseId
    })
  }

  render() {
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            !this.props.courses.length &&
            (
              <tr>
                <td colSpan="5">No courses (yet!)</td>
              </tr>
            )
          }
          {
            this.props.courses.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.shortcode}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    {
                      this.isUserEnrolled.call(item.id) ?
                        <button
                          onClick={this.joinCourse.bind(this, item.id)}
                          className="pure-button">Join</button>
                      :
                        <button
                          onClick={this.quitCourse.bind(this, item.id)}
                          className="pure-button">Quit</button>
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

}

CoursesList.propTypes = {
  courses: PropTypes.array,
  dispatch: PropTypes.func,
  user: PropTypes.object
}

export default CoursesList
