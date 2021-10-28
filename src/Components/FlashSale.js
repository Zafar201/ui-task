import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function FlashSale() {
    return (
        <div className="flash">
            <Container className="flash-bg">
            <Container>
                <Row className='flash-pd'>
                   
                     <Col className='flash-1' md={3}>
                        <Row>
                            <h1>Flash Sale</h1>
                        </Row>
                        <Row>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                         </Row>
                         <Row>
                           <h2>05  :  42  :  19  :  54</h2> 
                         </Row>
                     </Col>

                     <Col  className='flash-2'>
                       <Row className="flash-box">
                           <Col md={4}>
                           <img src="/assets/img/watch.png" alt="" />
                           </Col>
                           <Col md={8}>
                              <Row>
                                 <h1>Casio G-Shock Ana-Digi Quartz World Time 200m Black</h1>
                              </Row>
                              <Row>
                                  <Col>
                                    <h2>$33.3</h2>
                                  </Col>
                                  <Col>
                                   <h3>24 left</h3>
                                  </Col>
                              </Row>
                              <Row>
                              <img src="/assets/img/progress.png" alt="" />
                              </Row>
                           </Col>
                       </Row>
                       <Row className='dotslider'>
                          <img src="/assets/img/dotSlider.png" alt="" /> 
                       </Row>
                     </Col>


                     <Col  className='flash-2'>
                       <Row className="flash-box">
                           <Col md={4}>
                           <img src="/assets/img/watch.png" alt="" />
                           </Col>
                           <Col md={8}>
                              <Row>
                                 <h1>Casio G-Shock Ana-Digi Quartz World Time 200m Black</h1>
                              </Row>
                              <Row>
                                  <Col>
                                    <h2>$33.3</h2>
                                  </Col>
                                  <Col>
                                   <h3>24 left</h3>
                                  </Col>
                              </Row>
                              <Row>
                              <img src="/assets/img/progress.png" alt="" />
                              </Row>
                           </Col>
                       </Row>
                       <Row className='dotslider'>
                          <p>View More</p>
                       </Row>
                     </Col>
                    
                </Row>
                </Container>
            </Container>
        </div>
    )
}

export default FlashSale
