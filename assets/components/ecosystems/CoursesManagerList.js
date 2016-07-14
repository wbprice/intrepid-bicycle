import React, { PropTypes, Component } from 'react'

class CoursesManagerList extends Component {

  render() {
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Description</th>
            <th></th>
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
                      onClick={this.editClass.bind(this, item.id)}
                      className="pure-button button-secondary">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={this.deleteClass.bind(this, item.id)}
                      className="pure-button button-error">Delete</button>
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

CoursesManagerList.propTypes = {
  courses: PropTypes.array
}

export default CoursesManagerList
