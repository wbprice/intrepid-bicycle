import React, { PropTypes, Component } from 'react'

import NewClassForm from './../organisms/NewClassForm'

import {
  fetchClasses,
  deleteClass
} from './../../redux/actions/classes-actions'

class ClassesManager extends Component {

  componentWillMount() {
    this.props.dispatch(fetchClasses())
  }

  deleteClass(classId) {
    this.props.dispatch(deleteClass(classId))
  }

  editClass(classId) {
    console.log('unimplemented')
  }

  render() {
    return (
      <section>
        <h2>Classes</h2>
        <NewClassForm dispatch={this.props.dispatch} />

        <table className="pure-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Class Name</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              !this.props.classes.length &&
              (
                <tr>
                  <td colSpan="5">No classes (yet!)</td>
                </tr>
              )
            }
            {
              this.props.classes.map((item, index) => {
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

      </section>
    )
  }

}

ClassesManager.propTypes = {
  classes: PropTypes.array,
  dispatch: PropTypes.func
}

export default ClassesManager
