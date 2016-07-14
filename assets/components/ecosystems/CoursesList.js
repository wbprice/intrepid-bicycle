import React, { PropTypes, Component } from 'react'

class CoursesList extends Component {

  joinClass() {

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
                    <button
                      onClick={this.joinClass.bind(this)}
                      className="pure-button">Join</button>
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
  dispatch: PropTypes.func
}

export default CoursesList
