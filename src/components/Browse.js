import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Browse extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  state = {
    entries: []
  }

  componentDidMount () {
    this.loadWords()
  }

  loadWords () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=vorpal'
    window.fetch(url)
  .then(r => r.json())
  .then(data => {
    this.setState({
      entries: data
    })
  })
  }

  render () {
    const filtered = this.state.entries.filter(item => {
      if (this.props.match.params.letter === 'numbers') {
        return item.term.match(/^\d/)
      } else {
        return item.term[0].toLowerCase() === this.props.match.params.letter
      }
    })
    const words = filtered.map(word => {
      return <li key={word.id}>
        <NavLink to={`/entry/${word.slug}`}>{word.term}</NavLink>
      </li>
    })

    // const showWord = this.props.entries.map((item) => {
    //   return <p key={item.id}>
    //     <Link to={`/entry/${item.slug}`}> {item.term} </Link>
    //   </p>
    // })
    return (
      <div className='Browse body'>
        <h2> {this.props.match.params.letter.toUpperCase()}</h2>
        <ul> {words} </ul>
      </div>
    )
  }
}

export default Browse
