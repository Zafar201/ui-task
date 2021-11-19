import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SmallBanners() {
    return (
        <div className='smallbanners'>
            <Container >
               <Row className='banners-pd'>
                  <Col className='small-1'>
                      <Container>
                     <Row>
                        <h1>Explore <br /> <span>classifieds</span> </h1>
                     </Row>
                     <Row>
                         <Col md={10}>
                           <p>Over 5000 + Products</p>
                         </Col>
                         <Col className='banner-arrow'>
                           <img src="/assets/img/arrow (2).png" alt="" />
                         </Col>
                     </Row>
                     </Container>
                  </Col>


                  <Col className='small-2'>
                      <Container>
                     <Row>
                        <h1>Add<br /> <span>classifieds</span> </h1>
                     </Row>
                     <Row>
                         <Col md={10}>
                           <p>ads, event ads service requests etc</p>
                         </Col>
                         <Col className='banner-arrow'>
                           <img src="/assets/img/arrow (2).png" alt="" />
                         </Col>
                     </Row>
                     </Container>
                  </Col>
               </Row>


               <Row className='banners-pd'>
               <Col className='small-3'>
                      <Container>
                     <Row>
                        <h1>Explore<br /> <span>classifieds</span> </h1>
                     </Row>
                     <Row>
                         <Col md={10}>
                           <p>ads, event ads service requests etc</p>
                         </Col>
                         <Col className='banner-arrow'>
                           <img src="/assets/img/arrow (2).png" alt="" />
                         </Col>
                     </Row>
                     </Container>
                  </Col>


                  <Col className='small-4'>
                  <Container>
                     <Row>
                        <h1>Add<br /> <span>classifieds</span> </h1>
                     </Row>
                     <Row>
                         <Col md={10}>
                           <p>Over 25000 + Products</p>
                         </Col>
                         <Col className='banner-arrow'>
                           <img src="/assets/img/arrow (2).png" alt="" />
                         </Col>
                     </Row>
                     </Container>
                  </Col>
               </Row>
            </Container>
        </div>
    )
}

export default SmallBanners
