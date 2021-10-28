import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Banner() {
  return (
    <div className="banner">
      <Container>
        <Row className="bg">
          <Col>
          
          </Col>
          <Col  style={{alignSelf:"center"}}>
            <h1>
              From students to senior citizens this web portal of 
             <span > "Products and Classifieds”</span>
               provides it all
            </h1>
          </Col>
        </Row>
        <Row className='bg-sl'>
        <img src="/assets/img/dotSlider2.png" alt="" />
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
