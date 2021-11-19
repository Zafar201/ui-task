import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HotSale() {
  return (
    <div className="hotsale">
      <Container>
        <Row className="hotsale-1">
          <h1>Hot Sale</h1>
        </Row>
        <Row className='hotsale-2'>
          <Col style={{ alignSelf: "center" }} className='img-none' md={1}>
            <img src="/assets/img/Group 39.png" alt="" />
          </Col>

          <Col className='hot-box'  >
            <Row className='hotsales' >
               <img src="/assets/img/hot.png" alt="" />
            </Row>
            <Row>
                <h1>PVC Bean Bag Black 80x80x50centimeter</h1>
            </Row>
            <Row>
                <h2>$876.98</h2>
            </Row>
            <Row>
                <Col md={7}>
                  <h3>$890.99</h3>
                </Col>
                <Col md={2}>
                   <h4>4.5</h4>
                </Col>
              
                <Col md={2} style={{paddingBottom:"4px"}}>
                    <img src="/assets/img/star.png" alt="" /> 
                </Col>
            </Row>
            <Row className="hot-btn">
               <button>Add to cart</button>
            </Row>
          </Col>


          <Col className='hot-box' >
            <Row className='hotsales' >
               <img src="/assets/img/hot1.png" alt="" />
            </Row>
            <Row>
                <h1>PVC Bean Bag Black 80x80x50centimeter</h1>
            </Row>
            <Row>
                <h2>$876.98</h2>
            </Row>
            <Row>
                <Col md={7}>
                  <h3>$890.99</h3>
                </Col>
                <Col md={2}>
                   <h4>4.5</h4>
                </Col>
              
                <Col md={2} style={{paddingBottom:"4px"}}>
                    <img src="/assets/img/star.png" alt="" /> 
                </Col>
            </Row>
            <Row className="hot-btn">
               <button>Add to cart</button>
            </Row>
          </Col>


          <Col className='hot-box' >
            <Row className='hotsales' >
               <img src="/assets/img/hot2.png" alt="" />
            </Row>
            <Row>
                <h1>PVC Bean Bag Black 80x80x50centimeter</h1>
            </Row>
            <Row>
                <h2>$876.98</h2>
            </Row>
            <Row>
                <Col md={7}>
                  <h3>$890.99</h3>
                </Col>
                <Col md={2}>
                   <h4>4.5</h4>
                </Col>
              
                <Col md={2} style={{paddingBottom:"4px"}}>
                    <img src="/assets/img/star.png" alt="" /> 
                </Col>
            </Row>
            <Row className="hot-btn">
               <button>Add to cart</button>
            </Row>
          </Col>


         <Col className='hot-box' >
            <Row className='hotsales' >
               <img src="/assets/img/hot3.png" alt="" />
            </Row>
            <Row>
                <h1>PVC Bean Bag Black 80x80x50centimeter</h1>
            </Row>
            <Row>
                <h2>$876.98</h2>
            </Row>
            <Row>
                <Col md={7}>
                  <h3>$890.99</h3>
                </Col>
                <Col md={2}>
                   <h4>4.5</h4>
                </Col>
              
                <Col md={2} style={{paddingBottom:"4px"}}>
                    <img src="/assets/img/star.png" alt="" /> 
                </Col>
            </Row>
            <Row className="hot-btn">
               <button>Add to cart</button>
            </Row>
          </Col>


          <Col className='hot-box img-none' >
            <Row className='hotsales' >
               <img src="/assets/img/hot4.png" alt="" />
            </Row>
            <Row>
                <h1>PVC Bean Bag Black 80x80x50centimeter</h1>
            </Row>
            <Row>
                <h2>$876.98</h2>
            </Row>
            <Row>
                <Col md={7}>
                  <h3>$890.99</h3>
                </Col>
                <Col md={2}>
                   <h4>4.5</h4>
                </Col>
              
                <Col md={2} style={{paddingBottom:"4px"}}>
                    <img src="/assets/img/star.png" alt="" /> 
                </Col>
            </Row>
            <Row className="hot-btn">
               <button>Add to cart</button>
            </Row>
          </Col>


          <Col md={1} style={{ alignSelf: "center" }} className='img-none'>
            <img src="/assets/img/Group 423.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HotSale;
