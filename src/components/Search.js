import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'

class Search extends Component {
  state = {}

  // searchWord = (searchTerm) => {
  //   const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=vorpal'
  //   window.fetch(url)
  // .then(r => r.json())
  // .then(data => {
  //   const search = data.filter(item => item.term.includes(searchTerm))
  //   console.log(search)
  //   this.setState({
  //     searchResult: search
  //   })
  // })
  // }
  _submit = (e) => {
    e.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.props.history.push(path)
    this.setState({
      query
    })
  }

  render () {
    return <div> <form onSubmit={this._submit}>
      <div className='searchForm'>
        <span className='icon'><i className='fa fa-search' /></span>
        <input type='search' id='search' placeholder='Search...' ref='query' /> </div>
    </form>
      <div className='searchResult'>
        <Route path='/search/' render={this.showSearchText} />
      </div>
    </div>
  }
}

export default withRouter(Search)
