import React from 'react'
import {
  Layout
} from 'antd'

const {
  Header
} = Layout

export default function Notion() {
  return (
    <div>
      <Header style={{
        backgroundColor: 'white'
      }}>
        <h1 style={{
          color: 'black'
        }}>
          Terry Su's Blog
        </h1>
      </Header>
    </div>
  )
}