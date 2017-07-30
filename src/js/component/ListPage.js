import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import BreadcrumbContainer from '../container/BreadcrumbContainer'
import CatalogContainer from '../container/CatalogContainer'
import ListBoxContainer from '../container/ListBoxContainer'
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
        <BreadcrumbContainer />
      </Header>
      <Row>
        <Col xs={1} sm={1}/>
        <Col xs={23} sm={6}>
          <br />
          <CatalogContainer />
        </Col>
        <Col xs={0} sm={2}></Col>
        <Col xs={24} sm={16}>
          <ListBoxContainer />
        </Col>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}