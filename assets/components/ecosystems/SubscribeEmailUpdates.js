import React, { PropTypes, Component } from 'react'

class SubscribeEmailUpdates extends Component {

  render() {
    return (
      <div>
        <p>We're not open for business yet, but sign up below for email alerts.</p>
        <form className="pure-u-1 pure-form" action="/signup" method="post">
          <input name="emailAddress" type="email" />
          <button className="pure-button pure-button-primary">Submit</button>
        </form>
      </div>
    )
  }

}

SubscribeEmailUpdates.propTypes = {}

export default SubscribeEmailUpdates
