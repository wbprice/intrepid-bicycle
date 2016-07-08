import React, { PropTypes, Component } from 'react'

import UploadCourseworkFileList from './../organisms/UploadCourseworkFileList'

import {
  addCourseworkFiles,
  uploadCourseworkFiles
} from './../../redux/actions/coursework-actions'

class UploadCourseworkForm extends Component {

  selectFile (event) {
    const files = event.target.files
    this.props.dispatch(addCourseworkFiles(files))
  }

  uploadFiles(event) {
    event.preventDefault()
    this.props.dispatch(uploadCourseworkFiles(this.props.coursework))
  }

  render() {
    return (
      <form className="pure-form pure-form-stacked"
        onSubmit={this.uploadFiles.bind(this)}>
        <fieldset>
          <legend>A Stacked Form</legend>

          <label htmlFor="file">File</label>
          <input
            onChange={this.selectFile.bind(this)}
            multiple
            id="file"
            type="file"
            placeholder="Your file!" />

          <label htmlFor="signature">Signature</label>
          <input
            id="signature"
            type="text"
            name="signature" />

          <label htmlFor="remember" className="pure-checkbox">
            <input
              id="remember"
              type="checkbox" /> I am not a cheater!
          </label>

          <UploadCourseworkFileList
            coursework={this.props.coursework}
            dispatch={this.props.dispatch} />

          <button type="submit" className="pure-button pure-button-primary">Start Uploading Files</button>

        </fieldset>
      </form>
    )
  }

}

UploadCourseworkForm.propTypes = {
  coursework: PropTypes.array,
  dispatch: PropTypes.func
}

export default UploadCourseworkForm
