import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import Catalog from './Catalog'
import ListBox from './ListBox'
import Copyright from './Copyright'


const {
  Header
} = Layout



export default function ListPage() {
  return (
    <div>
      <Header style={{
        backgroundColor: 'white'
      }}>
        <Breadcrumb />
      </Header>
      <Row>
        <Col xs={1} sm={1}/>
        <Col xs={23} sm={6}>
          <br />
          <Catalog />
        </Col>
        <Col xs={0} sm={2}></Col>
        <Col xs={24} sm={16}>
          <ListBox />
        </Col>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}