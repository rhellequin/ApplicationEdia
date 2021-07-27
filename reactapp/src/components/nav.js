import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';





function Nav () {

    return ( 
    // <div>
    //     <div style={{display:'flex',justifyContent:'space-between', alignItems:'center' }}>
    //         <img src='../images/EDIA.png' style={{}} height='150px' />
    //         <div>
    //             <Button outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button>
    //             <Button color="primary" style={{margin:'20px'}}>S'inscrire</Button>
    //         </div>
    //     </div>
    // </div>
            <Row style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Col sm="12" md="6" lg="6" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <img src='../images/EDIA.png'  height='120px' />
            </Col>
            <Col sm="12" md="6" lg="6" style={{ display:'flex',justifyContent:'flex-end', alignItems:'self-end'}}>
                <Button outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button>
                <Button color="primary" size='lg'style={{margin:'20px'}}>S'inscrire</Button>
            </Col>
            </Row>


    )}
export default Nav;