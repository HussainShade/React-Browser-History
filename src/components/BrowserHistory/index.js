import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      historyDetailsList: props.initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSearch = value => {
    this.setState({
      searchInput: value,
    })
  }

  deleteHistory = id => {
    const {historyDetailsList} = this.state
    const filteredHistoryData = historyDetailsList.filter(
      each => each.id !== id,
    )
    this.setState({
      historyDetailsList: filteredHistoryData,
    })
  }

  render() {
    const {searchInput, historyDetailsList} = this.state

    const searchResults = historyDetailsList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>

        <div className="app-container">
          <ul className="history-container">
            {searchResults.length === 0 ? (
              <p className="error">There is no history to show</p>
            ) : (
              searchResults.map(eachHistory => (
                <HistoryItem
                  key={eachHistory.id}
                  historyDetails={eachHistory}
                  updateSearch={this.updateSearch}
                  deleteHistory={this.deleteHistory}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
