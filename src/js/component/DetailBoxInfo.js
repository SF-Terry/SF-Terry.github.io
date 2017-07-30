import React from 'react'
import {
  Tag
} from 'antd'


export default function DetailBoxInfo({ createTime, tags, repostNotice }) {
  return (
    <div>
      <div>
        <b>创建时间： {createTime}</b>
      </div>

      <div>
        <b>标签：</b>
        {
          tags.map((tag, index) => {
            return <span style={{
              display: 'inline-block',
              padding: '5px'
            }} key={index}>
              <Tag color="#108ee9">
                {tag}
              </Tag>    
            </span>
          })
        }
      </div>
      
      <div>
        <b>转载说明：{repostNotice}</b>
      </div>
    </div>
  )
}