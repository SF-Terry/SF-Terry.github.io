import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import DetailBox from './DetailBox'
import Copyright from './Copyright'

const {
  Header
} = Layout

export default function DetailPage() {
  return (
    <div>
      <Header style={{
        backgroundColor: 'white'
      }}>
        <Breadcrumb />
      </Header>
      <Row type='flex' justify='center'>
        <Col xs={23} sm={12}>
          <DetailBox />
        </Col>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}