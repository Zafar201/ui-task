import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

function RecentlyViewed() {
    return (
        <>
        <div className='recently'>
            <Container>
                <Row className='recent'>
                    <Col className='recently-1'>
                       <h1>Recently Viewed</h1>
                    </Col>
                    <Col md={1} className='img-none'>
                    <img src="/assets/img/ok.png" alt="" />
                    </Col>
                    <Col md={1} className='img-none'>
                    <img src="/assets/img/arrow (3).png" alt="" />
                      </Col>

                </Row>

                <Row >
                    <Col className='recently-2'>
                       <Col>
                          <img src="/assets/img/deals1.png" alt="" />
                       </Col>
                       <Col>
                          <Row>
                              <h1>Fitness and activity Tracker</h1>
                          </Row>
                          <Row>
                              <p>$33.3</p>
                          </Row>
                          <Row >
                             <Col md={6} style={{paddingRight:"0"}}>
                             <img className="ratings" src="/assets/img/ratings.png" alt="" />
                             </Col>
                             <Col md={1} style={{paddingLeft:"0",color:"#8D8D8D;"}}>
                               <p2>(2)</p2> 
                             </Col>
                          </Row>
                       </Col>
                    </Col>


                    <Col className='recently-2'>
                       <Col>
                          <img src="/assets/img/deals2.png" alt="" />
                       </Col>
                       <Col>
                          <Row>
                              <h1>Fitness and activity Tracker</h1>
                          </Row>
                          <Row>
                              <p>$33.3</p>
                          </Row>
                          
                          <Row >
                             <Col md={6} style={{paddingRight:"0"}}>
                             <img className="ratings" src="/assets/img/ratings.png" alt="" />
                             </Col>
                             <Col md={1} style={{paddingLeft:"0"}}>
                             <p2>(2)</p2> 
                             </Col>
                          </Row>
                       </Col>
                    </Col>



                    <Col className='recently-2'>
                       <Col>
                          <img src="/assets/img/deals3.png" alt="" />
                       </Col>
                       <Col>
                          <Row>
                              <h1>Fitness and activity Tracker</h1>
                          </Row>
                          <Row>
                          <p>$33.3</p>
                          </Row>
                         
                          <Row >
                             <Col md={6} style={{paddingRight:"0"}}>
                             <img className="ratings" src="/assets/img/ratings.png" alt="" />
                             </Col>
                             <Col md={1} style={{paddingLeft:"0"}}>
                             <p2>(2)</p2> 
                             </Col>
                          </Row>
                       </Col>
                    </Col>



                    <Col className='recently-2'>
                       <Col>
                          <img src="/assets/img/deals4.png" alt="" />
                       </Col>
                       <Col>
                          <Row>
                              <h1>Fitness and activity Tracker</h1>
                          </Row>
                          <Row>
                              <p>$33.3</p>
                          </Row>
                          <Row >
                             <Col md={6} style={{paddingRight:"0"}}>
                             <img className="ratings" src="/assets/img/ratings.png" alt="" />
                             </Col>
                             <Col md={1} style={{paddingLeft:"0"}}>
                               <p2>(2)</p2> 
                             </Col>
                          </Row>
                       </Col>
                    </Col>


                    <Col className='recently-2'>
                       <Col>
                          <img src="/assets/img/deals5.png" alt="" />
                       </Col>
                       <Col>
                          <Row>
                              <h1>Fitness and activity Tracker</h1>
                          </Row>
                          <Row>
                              <p>$33.3</p>
                          </Row>
                          <Row >
                             <Col md={6} style={{paddingRight:"0",width:"50%"}}>
                             <img className="ratings" src="/assets/img/ratings.png" alt="" />
                             </Col>
                             <Col md={1} style={{paddingLeft:"0"}}>
                             <p2>(2)</p2> 
                             </Col>
                          </Row>
                       </Col>
                    </Col>


                    
                </Row>
            </Container>


            
        </div>
     
     <div className='bck-to-top'>
         <Container>
             <Row style={{placeContent:"center"}}>                     
                 
                 <img  src="/assets/img/Group 80.png" alt="" />           
                 
             </Row>
         </Container>
     </div>

   </>
    )
}

export default RecentlyViewed
