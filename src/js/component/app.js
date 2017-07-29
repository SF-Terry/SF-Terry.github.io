import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Blog from './Blog'

render(
  <Blog/>,
  document.getElementById('app')
)