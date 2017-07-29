import React from 'react'

import { Breadcrumb as AntdBreadcrumb } from 'antd';



export default function Breadcrumb() {
  return (
    <div>
      <AntdBreadcrumb>
        <AntdBreadcrumb.Item>Home</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item><a href="#">List Name</a></AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item><a href="#">Blog Name</a></AntdBreadcrumb.Item>
      </AntdBreadcrumb>
    </div>
  )
}