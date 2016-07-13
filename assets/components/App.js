import React, { PropTypes, Component } from 'react'
import Alerts from './organisms/Alerts'
import Header from './ecosystems/Header'

class App extends Component {

  render() {
    return (
      <div>

        <Header />
        <Alerts />

        <section className="app-container">
          { this.props.children }
        </section>

      </div>
    )
  }

}

App.propTypes = {
  children: PropTypes.any
}

export default App
