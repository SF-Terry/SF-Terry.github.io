import React from 'react'


export default function ListBoxItem({ blog, onClick }) {
  return (
    <div onClick={onClick}>
      <h1>{ blog.title }</h1>
      <p>{ blog.abstract }</p>
    </div>
  )
}