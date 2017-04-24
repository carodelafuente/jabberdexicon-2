import React, { Component } from 'react'
import Home from './Home'
import Result from './Result'
import Browse from './Browse'
import Search from './Search'
import SearchResult from './SearchResult'
import NewEntry from './NewEntry'
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
          <Letters />
        </div>

        <div className='sidebar-body-container'>
          <div className='sidebar'>
            <div className='form'>
              <Search />
            </div>

            <div className='addEntry'>
              <Link to='/new'>
                Add an Entry
              </Link>
            </div>
          </div>

          <div className='body'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/browse/:letter' component={Browse} />
              <Route path='/entry/:slug' component={Result} />
              <Route path='/new' component={NewEntry} />
              <Route path='/search/:word' component={SearchResult} />
            </Switch>
          </div>
        </div>

      </div>
    </Router>
  }
}

export default App
