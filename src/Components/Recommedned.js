import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Recommedned() {
    return (
        <div className='recommended'>
            <Container>
                <Row className='rec-1'>
                   <Col>
                      <h1>Recommended</h1>
                   </Col>
                   <Col>
                     <p>View All</p>
                   </Col>
                </Row>

                <Row className='rec-2'>
                    <Col style={{alignSelf:"center"}} md={1} className='img-none'>
                       <img src="/assets/img/Group 39.png" alt="" />
                    </Col>
                    <Col className='rec-2-box'>
                      <Row className='rec-2-pad'>
                        <img src="/assets/img/placeholder (7).png" alt="" /> 
                      </Row>
                      <Row>
                        <h1>iPhone 12 With Facetime 128GB Blue 5G Specs</h1>
                      </Row>
                      <Row>
                          <h2>$1,245.33</h2>
                      </Row>
                      <Row style={{paddingBottom:"13px"}}>
                          <Col md={6}>
                             <h3>$1,300</h3>
                          </Col>
                          <Col md={{ span: 1, offset: 2 }}>
                             <h4>4.5</h4>
                          </Col>
                          <Col className='rec-2-1' md={1}>
                          <img src="/assets/img/star.png" alt="" /> 
                          </Col>
                      </Row>
                    </Col>



                     <Col className='rec-2-box'>
                      <Row className='rec-2-pad'>
                        <img src="/assets/img/placeholder (8).png" alt="" /> 
                      </Row>
                      <Row>
                        <h1>iPhone 12 With Facetime 128GB Blue 5G Specs</h1>
                      </Row>
                      <Row>
                          <h2>$1,245.33</h2>
                      </Row>
                      <Row style={{paddingBottom:"13px"}}>
                          <Col md={6}>
                             <h3>$1,300</h3>
                          </Col>
                          <Col md={{ span: 1, offset: 2 }}>
                             <h4>4.5</h4>
                          </Col>
                          <Col className='rec-2-1' md={1}>
                          <img src="/assets/img/star.png" alt="" /> 
                          </Col>
                      </Row>
                    </Col>



                    <Col className='rec-2-box'>
                      <Row className='rec-2-pad'>
                        <img src="/assets/img/ug-1.png" alt="" /> 
                      </Row>
                      <Row>
                        <h1>iPhone 12 With Facetime 128GB Blue 5G Specs</h1>
                      </Row>
                      <Row>
                          <h2>$1,245.33</h2>
                      </Row>
                      <Row style={{paddingBottom:"13px"}}>
                          <Col md={6}>
                             <h3>$1,300</h3>
                          </Col>
                          <Col md={{ span: 1, offset: 2 }}>
                             <h4>4.5</h4>
                          </Col>
                          <Col className='rec-2-1' md={1}>
                          <img src="/assets/img/star.png" alt="" /> 
                          </Col>
                      </Row>
                    </Col>



                    <Col className='rec-2-box'>
                      <Row className='rec-2-pad'>
                        <img src="/assets/img/ug-2.png" alt="" /> 
                      </Row>
                      <Row>
                        <h1>iPhone 12 With Facetime 128GB Blue 5G Specs</h1>
                      </Row>
                      <Row>
                          <h2>$1,245.33</h2>
                      </Row>
                      <Row style={{paddingBottom:"13px"}}>
                          <Col md={6}>
                             <h3>$1,300</h3>
                          </Col>
                          <Col md={{ span: 1, offset: 2 }}>
                             <h4>4.5</h4>
                          </Col>
                          <Col className='rec-2-1' md={1}>
                          <img src="/assets/img/star.png" alt="" /> 
                          </Col>
                      </Row>
                    </Col>


                    
                    
                    <Col className='rec-2-box '>
                      <Row className='rec-2-pad'>
                        <img src="/assets/img/ug-3.png" alt="" /> 
                      </Row>
                      <Row>
                        <h1>iPhone 12 With Facetime 128GB Blue 5G Specs</h1>
                      </Row>
                      <Row>
                          <h2>$1,245.33</h2>
                      </Row>
                      <Row style={{paddingBottom:"13px"}} >
                          <Col md={6}>
                             <h3>$1,300</h3>
                          </Col>
                          <Col md={{ span: 1, offset: 2 }}>
                             <h4>4.5</h4>
                          </Col>
                          <Col className='rec-2-1' md={1}>
                          <img src="/assets/img/star.png" alt="" /> 
                          </Col>
                      </Row>
                    </Col>

                    <Col md={1} className='img-none' style={{alignSelf:"center"}}>
                    <img src="/assets/img/Group 423.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Recommedned
