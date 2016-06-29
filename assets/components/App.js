import React, { PropTypes, Component } from 'react'
import Alerts from './organisms/Alerts'

class App extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>Intrepid Biped Potatogram</h1>
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
