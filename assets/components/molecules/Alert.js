import React, { Component, PropTypes } from 'react'

class Alert extends Component {

  render() {
    return (
      <div onClick={this.props.onDismiss}>
        <pre>{this.props.text}</pre>
      </div>
    )
  }

}

Alert.propTypes = {
  text: PropTypes.string,
  onDismiss: PropTypes.func
}

export default Alert
