import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import BreadcrumbContainer from '../container/BreadcrumbContainer'
import DetailBoxContainer from '../container/DetailBoxContainer'
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
        <BreadcrumbContainer />
      </Header>
      <Row type='flex' justify='center'>
        <Col xs={23} sm={12}>
          <DetailBoxContainer/>
        </Col>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}