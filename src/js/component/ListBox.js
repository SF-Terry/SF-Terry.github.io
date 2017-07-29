import React from 'react'
import {
  Card
} from 'antd'
import ListBoxItem from './ListBoxItem'

export default function ListBox() {
  return (
    <div>
      <Card noHovering bordered={false}>
        {[...'12345'].map((v, i) => (
          <div key={i} style={{
            padding: '5px 0 5px 20px'
          }}>
            <ListBoxItem />
          </div>
        ))}
      </Card>
    </div>
  )
}