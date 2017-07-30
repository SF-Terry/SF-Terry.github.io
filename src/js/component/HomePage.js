import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import CatalogContainer from '../container/CatalogContainer'
import NewestColumnContainer from '../container/NewestColumnContainer'
import NotionContainer from '../container/NotionContainer'
import Copyright from './Copyright'

const {
  Content
} = Layout


export default function HomePage() {
  return (
    <div>
      <NotionContainer />
      <Content>
        <Row type="flex" gutter={1} justify={'left'}>
          <Col xs={1} sm={2}/>
          <Col xs={13} sm={13}>
            <NewestColumnContainer />
          </Col>
          <Col xs={3} sm={2}/>
          <Col xs={6} sm={6}>
            <br />
            <CatalogContainer />
          </Col>
        </Row>
      </Content>
      <br /><br /><br />
      <Copyright />
    </div>
  )
}