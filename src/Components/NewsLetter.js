import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container,  Row } from "react-bootstrap";

function NewsLetter() {
  return (
    <div className="newsletter">
      <Container>
        <Row>
          <Col md={2}>
            <img src="/assets/img/newsletter.png" alt="" />
          </Col>
          <Col md={5}>
            <Row className="news-2">
              <Col md={10}>
                <h1>Sign Up for Newsletter</h1>
              </Col>
              <Col md={2}>
                <img src="/assets/img/circleElement.png" alt="" />
              </Col>
            </Row>
            <Row>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </Row>
          </Col>

          <Col>
            <Row>
              <div class="inputWithButton">
                <input type="text" placeholder="Enter your email here.."/>
                <button>SUBSCRIBE</button>
                {/* <img src="/assets/img/circleElement.png" alt="" /> */}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsLetter;
