import React from 'react'
import {
  Col,
  Row
} from 'antd'
import DetailBoxContent from './DetailBoxContent'
import DetailBoxInfo from './DetailBoxInfo'

export default function DetailBox() {
	return (
		<div>
      <h1 style={{
        textAlign: 'center'
      }}>Blog Title</h1>
      <br />
      <DetailBoxContent />
      <br />
      <Row type='flex' justify='center'>
        <Col xs={18} sm={22}>
          <DetailBoxInfo />
        </Col>
      </Row>
      
		</div>
	)
}