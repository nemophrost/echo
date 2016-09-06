import React from 'react'
import { render } from 'react-dom'

const Echo = (props) => {
  return (
    <h1>Hi there</h1>
  )
}

render((<Echo />), document.body)
