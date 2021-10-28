import React from 'react'
import { Col, Container, Row } from "react-bootstrap";


function Apple() {
    return (
        <div>
            <Container>

            
            <Row>
               <Col className='apple'>
                <Row className='apple-pad'>
                  <Col md={3}>
                      <img className=""  alt="png" src="/assets/img/apple.png"/>
                  </Col>
                  <Col md={9}>
                     <Row>
                        <p2>Download on the</p2>
                     </Row>
                     <Row>
                         <p3>App Store</p3> 
                     </Row>
                  </Col>
                </Row> 
               </Col>
               <Col className='apple'>
                <Row className='apple-pad'>
                  <Col md={3}>
                      <img className=""  alt="png" src="/assets/img/apple.png"/>
                  </Col>
                  <Col md={9}>
                     <Row>
                        <p2>Download on the</p2>
                     </Row>
                     <Row>
                         <p3>App Store</p3> 
                     </Row>
                  </Col>
                </Row> 
               </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Apple
