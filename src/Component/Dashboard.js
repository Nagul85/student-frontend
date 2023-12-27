import React from 'react'
import Base from '../Base/Base'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Dashboard = () => {
  return (
    <div>
      <Base>
      <Container>
      <Row>
        <Col xs={12} md={12} sm>
          <Image src="https://4.bp.blogspot.com/-pGKbJuirqjs/T1yd8e0g8sI/AAAAAAAAAC8/5MebIndJULg/s640/welcome+oficial.JPG"  style={{width:"90%"}}/>
        </Col>
      </Row>
    </Container>
      </Base>
    </div>
  )
}

export default Dashboard
