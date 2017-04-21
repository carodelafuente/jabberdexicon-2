import React, { Component } from 'react'

const Entry = ({ term, definition}) => (
  <div className='Entry'>
    <h2> {term} </h2>
    <p> {definition} </p>
  </div>
)

export default Entry
