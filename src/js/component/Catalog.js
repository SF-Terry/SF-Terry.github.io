import React from 'react'
import { Menu } from 'antd'

import Tags from './Tags'

export default function Catalog() {
  return (
    <div>
      <Menu style={{
        border: 'none'
      }}>
        <Menu.Item key="1">List1</Menu.Item>
        <Menu.Item key="2">List2</Menu.Item>
        <Menu.Item key="3">List3</Menu.Item>
        <Menu.Item key="4">List4</Menu.Item>
        <Menu.Item key="5">List5</Menu.Item>
      </Menu>
      <Tags />
    </div>
  )
}