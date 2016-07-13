import React, { PropTypes, Component } from 'react'
import HeaderLogin from './../organisms/HeaderLogin'

class Header extends Component {

  render() {
    return (
      <header className="app-header pure-menu-horizontal pure-menu pure-menu-fixed">
        <div className="app-container app-header-horizontal">
          <div className="branding">
            <h1 style={{margin: 0}}>Intrepid Bicycle</h1>
            <span>Never Forget How To Learn</span>
          </div>
          <HeaderLogin user={{}} />
        </div>
      </header>
    )
  }

}

export default Header
