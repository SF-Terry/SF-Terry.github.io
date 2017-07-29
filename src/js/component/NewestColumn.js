import React from 'react'

import {
  Card,
  Col,
  Row,
  Menu
} from 'antd'

import NewestColumnItem from './NewestColumnItem'


export default function NewestColumn() {
  return (
    <div>
      <Card title={
        <h3 style={{
          textAlign: 'center'
        }}>The newest</h3>
      } noHovering bordered={false}>
        <NewestColumnItem>Fri Jul 28 2017  Blog title 1</NewestColumnItem>
        <NewestColumnItem>Fri Jul 28 2017  Blog title 2</NewestColumnItem>
        <NewestColumnItem>Fri Jul 28 2017  Blog title 3</NewestColumnItem>
        <NewestColumnItem>Fri Jul 28 2017  Blog title 4</NewestColumnItem>
        <NewestColumnItem>Fri Jul 28 2017  Blog title 5</NewestColumnItem>
      </Card>
    </div>
  )
}