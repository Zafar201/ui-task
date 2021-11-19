import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function UrgentSelling() {
  return (
    <div className="urgent-selling">
      <Container>
        <Row className='wrap'>
          <Col md={2} className='self-cnter'>
            <Row>
              <h1>Classified Products on the week</h1>
            </Row>
            <Row className="arrows">
              <Col>
                <img src="/assets/img/Group 39.png" alt="" />
              </Col>
              <Col>
                <img src="/assets/img/Group 42.png" alt="" />
              </Col>
            </Row>
            <Row className="pd-ur">
              <button>
                Explore <img src="/assets/img/r8-w8.png" alt="" />
              </button>
            </Row>
          </Col>

          <Col className='img-padd'>
            <Row>
              <img alt="" src="/assets/img/placeholder (4).png" />
              
            </Row>
            <Row>
              <p>Holy Stone HS470 Foldable GPS RC Drone</p>
            </Row>
            <Row>
              <Col md={5}>
                <p2>$300.98</p2>
              </Col>
              <Col md={7} className='capetown'>
                <img src="/assets/img/capetown.png" alt="" />
              </Col>
            </Row>
          </Col>

          <Col className='img-padd'>
            <Row>
              <img alt="" src="/assets/img/placeholder (5).png" />
            </Row>
            <Row>
              <p>Holy Stone HS470 Foldable GPS RC Drone</p>
            </Row>
            <Row>
              <Col md={5}>
                <p2>$300.98</p2>
              </Col>
              <Col md={7} className='capetown'>
                <img src="/assets/img/capetown.png" alt="" />
              </Col>
            </Row>
          </Col>

          <Col className='img-padd'>
            <Row>
              <img alt="" src="/assets/img/placeholder (4).png" />
            </Row>
            <Row>
              <p>Holy Stone HS470 Foldable GPS RC Drone</p>
            </Row>
            <Row>
              <Col md={5}>
                <p2>$300.98</p2>
              </Col>
              <Col md={7} className='capetown'>
                <img src="/assets/img/capetown.png" alt="" />
              </Col>
            </Row>
          </Col>

          <Col className='img-padd'>
            <Row>
              <img alt="" src="/assets/img/car.png" />
            </Row>
            <Row>
              <p>Holy Stone HS470 Foldable GPS RC Drone</p>
            </Row>
            <Row>
              <Col md={5}>
                <p2>$300.98</p2>
              </Col>
              <Col md={7} className='capetown'>
                <img src="/assets/img/capetown.png" alt="" />
              </Col>
            </Row>
          </Col>
          
        </Row>
        </Container>
     
    </div>
  );
}

export default UrgentSelling;
