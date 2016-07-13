import React, { PropTypes, Component } from 'react'

class Header extends Component {

  render() {
    return (
      <header className="app-header pure-menu pure-menu-horizontal pure-menu-fixed">
        <div className="branding">
          <h1 style={{margin: 0}}>Intrepid Bicycle</h1>
          <span>Never Forget How To Learn</span>
        </div>
      </header>
    )
  }

}

export default Header
