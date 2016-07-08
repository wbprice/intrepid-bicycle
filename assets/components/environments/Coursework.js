import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import UploadCoursework from './../ecosystems/UploadCoursework'

class Coursework extends Component {

  render() {
    return (
      <section>
        <h1>Coursework</h1>
        <UploadCoursework
          coursework={this.props.coursework}
          dispatch={this.props.dispatch} />
      </section>
    )
  }

}

Coursework.propTypes = {
  coursework: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    coursework: state.coursework
  })
)(Coursework)
