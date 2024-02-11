import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickFunction = () => {
    this.setState(previousState => ({isDarkMode: !previousState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode
      ? 'dark-mode-container'
      : 'light-mode-container'
    const headingStyles = isDarkMode
      ? 'dark-mode-heading'
      : 'light-mode-heading'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container1">
        <div className={`container2 ${modeClassName}`}>
          <h1 className={`heading ${headingStyles}`}>Click To Change Mode</h1>
          <button
            className="btn-styles"
            type="button"
            onClick={this.onClickFunction}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
