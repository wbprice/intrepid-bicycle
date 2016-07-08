import React, { PropTypes, Component } from 'react'
import Alerts from './organisms/Alerts'

class App extends Component {

  render() {
    return (
      <div>

        <header>
          <h1 style={{margin: 0}}>Intrepid Bicycle</h1>
          <span>Never forget how to learn</span>
        </header>

        <Alerts />

        { this.props.children }

      </div>
    )
  }

}

App.propTypes = {
  children: PropTypes.any
}

export default App
