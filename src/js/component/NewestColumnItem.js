import React from 'react'


export default function NewestColumnItem({onClick, children}) {
  return (
    <div style={{
      padding: '10px 0 0 5px'
    }} onClick = {onClick}>
      {children}
    </div>
  )
}