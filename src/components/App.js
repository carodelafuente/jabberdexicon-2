import React, { Component } from 'react'
import Home from './Home'
import Result from './Result'
import Browse from './Browse'
import Letters from './Letters'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

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

            <Letters />

            <div className='addEntry'>
              <button>Add an Entry</button>
            </div>
          </div>

          <div className='body'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/browse/:letter' component={Browse} />
              <Route path='/entry/:slug' component={Result} />
            </Switch>
          </div>
        </div>

      </div>
    </Router>
  }
}

export default App
