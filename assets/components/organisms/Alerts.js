import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import Alert from './../molecules/Alert'

/**
 * @name Alerts
 * @description
 * Displays global alerts
 */

class Alerts extends Component {

  dismiss() {

  }

  render() {
    return (
      <div>
        { this.props.alerts.map(alert => {
          return (
            <Alert
              onDismiss={this.dismiss.bind(this)}
              text={alert.text} />
          )
        })}
      </div>
    )
  }

}

Alerts.propTypes = {
  alerts: PropTypes.array
}

export default connect(
  state => ({
    alerts: state.alerts
  })
)(Alerts)
