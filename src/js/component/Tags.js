import React from 'react'
import {
  Tag
} from 'antd'

function TagBox({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '5px'
    }} >
      <Tag color='blue'>
        {children}
      </Tag>
    </span>
  )
}

export default function Tags() {
  return (
    <div style={{
      padding: '10px'
    }}>
      <TagBox>Tag1</TagBox>
      <TagBox>Tag2</TagBox>
      <TagBox>Tag3</TagBox>
      <TagBox>Tag4</TagBox>
      <TagBox>Tag5</TagBox>
      <TagBox>Tag6</TagBox>
      <TagBox>Tag7</TagBox>
      <TagBox>Tag8</TagBox>
    </div>
  )
}