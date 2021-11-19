import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Container>
          <Row>
            <Col md={2}>
              <Row>
                <Col md={1}>
                  <img
                    className="right-img"
                    alt="png"
                    src="/assets/img/phone.png"
                  />
                </Col>
                <Col md={10}>
                  <p>+221 33 66 22</p>
                </Col>
              </Row>
            </Col>
            <Col md={1}>
              <Row>
                <Col md={1}>
                  <img
                    className="right-img"
                    alt="png"
                    src="/assets/img/envelope.png"
                  />
                </Col>
                <Col md={8}>
                  <p>support@elextra.io</p>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 1, offset: 5 }}>
              <Row className="line">
                <Col md={1}>
                  <img
                    className="right-img"
                    alt="png"
                    src="/assets/img/location.png"
                  />
                </Col>
                <Col md={6}>
                  <p>Calicut</p>
                  
                </Col>
                <Col md={1} className='line-img'>
                 <img src="/assets/img/separator.png" alt="" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row md={2}>
                <Col md={1}>
                  <p>$</p>
                </Col>
                <Col md={7}>
                  <p>Dollars(US)</p>
                </Col>
                <Col md={1}>
                  <img alt="png" src="/assets/img/dropdown.png" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row md={1}>
                <Col md={2}>
                  <p>EN</p>
                </Col>
                <Col md={1}>
                  <img alt="png" src="/assets/img/dropdown.png" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      
      
      
      <div className='btm-shdw'>
      <Container className="nav-2">
        <Row className="center">
          <Col>
            <img src="/assets/img/logo2.png" alt="" />
          </Col>
          <Col className="input-bg">
            <p>Classifieds</p>
            <img src="/assets/img/blaxk-arrow.png" alt="" />
          </Col>
          <Col md={4} className="input-bg2">
            <p>Search here...</p>
            <img src="/assets/img/searchicon.png" alt="" />
          </Col>
         

          <Col className="pad-img">
            <img src="/assets/img/love.png" alt="" />

            <img className='basket' src="/assets/img/basket.png" alt="" />
            <img className='count'  src="/assets/img/count.png" alt="" />

            <img src="/assets/img/profile.png" alt="" />
          </Col>

          <Col>
            <button className="nav-btn"> Classifieds </button>
          </Col>
        </Row>
        <Row className="nav-3">
          <Col className="p-0" md={1}>
            <p>All Categories</p>
          </Col>
          <Col className="blk-arw" md={1}>
            <img src="/assets/img/blaxk-arrow.png" alt="" />
          </Col>

          <Col>
            <p>Books</p>
          </Col>
          <Col>
            <p>Books</p>
          </Col>
          <Col>
            <p>Books</p>
          </Col>
          <Col>
            <p>Books</p>
          </Col>
          <Col>
            <p> Books</p>
          </Col>
          <Col>
            <p> Men</p>
          </Col>
          <Col>
            <p> Women</p>
          </Col>
          <Col>
            <p> Music</p>
          </Col>
          <Col>
            <p>Music</p>
          </Col>
          <Col>
            <p>toys</p>
          </Col>
          <Col>
            <p>kids</p>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Navbar;
