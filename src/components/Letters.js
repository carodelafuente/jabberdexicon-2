import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Letters extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  render () {
    const searchLetters = this.letters.map((letter, i) => {
      return <p key={i} className='letterLinks'>
        <NavLink to={`/browse/${letter}`}>
          {letter.toUpperCase()}
        </NavLink>
      </p>
    })
    return <div className='ul-box'>
      {searchLetters}
      <NavLink to={`/browse/numbers`} className='letterLinks'>
    #</NavLink>
    </div>
  }
}

export default Letters
