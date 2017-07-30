import React from 'react'
import {
  Col,
  Row
} from 'antd'
import DetailBoxContent from './DetailBoxContent'
import DetailBoxInfo from './DetailBoxInfo'

export default function DetailBox({ routeInfo }) {
  const {
    blog
  } = routeInfo

  const {
    title,
    createTime,
    tags,
    content,
    repostNotice
  } = blog

  return (
    <div>
      <h1 style={{
        textAlign: 'center'
      }}>{ title }</h1>
      <br />
      <DetailBoxContent content={content}/>
      <br />
      <Row type='flex' justify='center'>
        <Col xs={18} sm={22}>
          <DetailBoxInfo createTime={createTime} tags={tags || []} repostNotice={repostNotice}/>
        </Col>
      </Row>

    </div>
  )
}