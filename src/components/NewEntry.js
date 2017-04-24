import React, { Component } from 'react'
import { post } from './Api'

class NewEntry extends Component {
  _submit = (event) => {
    event.preventDefault()
    post('/entries', {
      entry: {
        term: this.refs.term.value,
        definition: this.refs.definition.value
      }
    }).then((entry) => {
      this.props.history.push(`entry/${entry.slug}`)
    })
  }
  render () {
    return <div className='NewEntry'>
      <h2>Submit your own word:</h2>
      <div className='entryForm'>
        <form onSubmit={this._submit}>
        Term:
          <input className='term' type='text' ref='term' />

        Definiton:
        <textarea className='definition' cols='30' rows='10' ref='definition' />
          <input type='submit' value='Submit' />

        </form>
      </div>
    </div>
  }
}

export default NewEntry
