import React, { PropTypes, Component } from 'react'
import UploadCourseworkForm from './../organisms/UploadCourseworkForm'

class UploadCoursework extends Component {

  render() {
    return (
      <section>
        <h2>Upload Coursework</h2>
        <UploadCourseworkForm
          coursework={this.props.coursework}
          dispatch={this.props.dispatch} />
      </section>
    )
  }

}

UploadCoursework.propTypes = {
  coursework: PropTypes.array,
  dispatch: PropTypes.func
}

export default UploadCoursework
