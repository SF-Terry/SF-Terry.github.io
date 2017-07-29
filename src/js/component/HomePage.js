import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Catalog from './Catalog'
import NewestColumn from './NewestColumn'
import Notion from './Notion'
import Copyright from './Copyright'

const {
  Content
} = Layout


export default function HomePage() {
  return (
    <div>
      <Notion />
      <Content>
        <Row type="flex" gutter={1} justify={'left'}>
          <Col xs={1} sm={2}/>
          <Col xs={13} sm={13}>
            <NewestColumn />
          </Col>
          <Col xs={3} sm={2}/>
          <Col xs={6} sm={6}>
            <br />
            <Catalog />
          </Col>
        </Row>
      </Content>
      <br /><br /><br />
      <Copyright />
    </div>
  )
}