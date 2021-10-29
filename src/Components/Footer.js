import React from 'react'
import { Col, Container,  Row } from "react-bootstrap";


function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={3}>
                      <Row >
                         <img className="footer-logo"  alt="png" src="/assets/img/logo2.png"/>    
                      </Row>
                      <Row>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </h1>
                      </Row>
                      <Row >
                          <Col className='soc-box'>
                             <img className=""  alt="png" src="/assets/img/soc1.png"/>
                          </Col>
                          <Col className='soc-box'>
                             <img className=""  alt="png" src="/assets/img/soc2.png"/>
                          </Col>
                          <Col className='soc-box'>
                             <img className=""  alt="png" src="/assets/img/soc3.png"/>
                          </Col>
                          <Col className='soc-box'>
                             <img className=""  alt="png" src="/assets/img/soc4.png"/>
                          </Col>
                          <Col className='soc-box'>
                             <img className=""  alt="png" src="/assets/img/soc5.png"/>
                          </Col>
                          <Col>
                          
                          </Col>
                  
                      </Row>                                               
                    </Col>
                    <Col md={2}>
                       <Row>
                          <h2>QUICK LINKS</h2>
                       </Row>
                       <Row>
                           <p>Products</p>
                       </Row>
                       <Row>
                           <p>Classifieds</p>
                       </Row>
                       <Row>
                            <p>Contact us</p>
                       </Row>
                       <Row>
                            <p>Login</p>
                       </Row>
                       <Row>
                             <p>Sign Up</p>
                       </Row>
                    </Col>


                    <Col md={2}>
                       <Row>
                          <h2>CUSTOMER AREA</h2>
                       </Row>
                       <Row>
                           <p>My Account</p>
                       </Row>
                       <Row>
                           <p>Orders</p>
                       </Row>
                       <Row>
                            <p>Tracking List</p>
                       </Row>
                       <Row>
                            <p>Terms </p>
                       </Row>
                       <Row>
                             <p>Privacy Policy</p>
                       </Row>
                       <Row>
                             <p>Return Policy</p>
                       </Row>
                       <Row>
                             <p>My Cart</p>
                       </Row>
                    </Col>


                     <Col md={2}>
                       <Row>
                          <h2>Vendor AREA</h2>
                       </Row>
                       <Row>
                           <p>Partner with us</p>
                       </Row>
                       <Row>
                           <p>Training</p>
                       </Row>
                       <Row>
                            <p>Procedures</p>
                       </Row>
                       <Row>
                            <p>Terms</p>
                       </Row>
                       <Row>
                             <p>Privacy Policy</p>
                       </Row>
                    </Col>


                    <Col>
                       <Row>
                          <h2>CONTACT</h2>
                       </Row>
                       <Row>
                           <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h3>
                       </Row>
                       <Row className='contact'>                 
                           <Col md={3} sty>
                               <img className=""  alt="png" src="/assets/img/headset.png"/>
                            </Col>
                            <Col md={6}>
                                <Row>
                                   <h4>Have any question?</h4>
                                </Row>
                                 <Row>
                                   <h5>+ 123 456 789</h5>
                                 </Row>
                            </Col>
                            <Col md={3} style={{alignSelf:"center"}}>
                                <button>Chat</button>                                
                            </Col>                                 
                       </Row>
                       
                       <Row className='store'>
                         <Col>
                          <img className=""  alt="png" src="/assets/img/googlePlay.png"/>
                         </Col>
                         <Col>
                         <img className=""  alt="png" src="/assets/img/appStore.png"/>
                         </Col>
                                               
                       </Row>
                     
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
