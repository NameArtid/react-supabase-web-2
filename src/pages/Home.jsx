import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

export default function Home() {
  return (
    <Container className='d-flex'>
      <Row>
        <Col>
          <img src='https://picsum.photos/200/300?random=1' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=2' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=3' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=4' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=5' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=6' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=7' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=8' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=9' className='rounded shadow mb-3 bg-body mx-3'/>
          <img src='https://picsum.photos/200/300?random=10' className='rounded shadow mb-3 bg-body mx-3'/>
        </Col>
      </Row>
    </Container>
  )
}
