import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'

function Separate() {
  return (
    <div>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default function Blog() {
  return (
    <div>
      {
        // dev single page or not
        0 ?
          <DetailPage />
          :
          <Router>
            <div>
              <h1 style={{
                textAlign: 'center'
              }}>
              <br/>
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/list">list</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/detail">detail</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/laboratory">laboratory</Link>
              </h1>

              <Route exact path="/" component={HomePage} />
              <Route path="/list" component={ListPage} />
              <Route path="/detail" component={DetailPage} />
              <Route path="/laboratory" component={LaboratoryPage} />
            </div>
          </Router>
      }

    </div>
  )
}