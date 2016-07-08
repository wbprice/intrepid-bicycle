import React, { PropTypes, Component } from 'react'

import {
  removeCourseworkFile
} from './../../redux/actions/coursework-actions'

class UploadCourseworkFileList extends Component {

  removeFile(name, event)  {
    event.preventDefault()
    event.stopPropagation()
    this.props.dispatch(removeCourseworkFile(name))
  }

  render() {
    return (
      <table className="pure-table">

        <thead>
          <tr>
            <th>Filename</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {
            !this.props.coursework.length &&
            <tr>
              <td colSpan="2">Upload some files!</td>
            </tr>
          }

          { this.props.coursework.map((file, index) => {
            return (
              <tr key={index}>
                <td>{file.name}</td>
                <td>
                  <button
                    onClick={this.removeFile.bind(this, file.name)}
                    className="pure-button button-secondary">Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
    )
  }

}

UploadCourseworkFileList.propTypes = {
  coursework: PropTypes.array,
  dispatch: PropTypes.func
}

export default UploadCourseworkFileList
