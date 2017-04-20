import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <div className='header'>
          <h1><Link to='/'> Jabberdexicon </Link></h1>
        </div>

        <div className='sidebar-body-container'>
          <div className='sidebar'>
            <div className='form'>
              <form action='#'>
                Search:
                <input type='search' />
              </form>
            </div>

            <div className='ul-box'>
              <ul>
                <li><a href='/browse/a'>A</a></li>
                <li><a href='/browse/b'>B</a></li>
                <li><a href='/browse/c'>C</a></li>
                <li><a href='/browse/d'>D</a></li>
                <li> ... </li>
              </ul>
            </div>
            <div className='addEntry'>
              <button>Add an Entry</button>
            </div>
          </div>

          <div className='body'>
            <h2>Welcome to Jabberdexicon!</h2>
          </div>
        </div>

      </div>
    </Router>
  }
}

export default App
