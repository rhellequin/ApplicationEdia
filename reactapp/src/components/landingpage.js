import React, {useState, useEffect } from 'react';
import {Input, Typography, Space } from 'antd'; 
import { Button,Badge,Col,Row,Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Landingpage () {

    return ( 
    
    <Container fluid={true}>

        <Row style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Col sm="12" md="6" lg="6" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <img src='../images/EDIA.png'  height='150px' />
        </Col>
        <Col sm="12" md="6" lg="6" style={{ display:'flex',justifyContent:'flex-end', alignItems:'self-end'}}>
            <Button outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button>
            <Button color="primary" size='lg'style={{margin:'20px'}}>S'inscrire</Button>
        </Col>
        </Row>

        <Row fluid={true} style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
        <Col sm="12" md="6" lg="6" style={{ display:'flex', flexDirection:'column'}} justifyContent='center' alignItems='center'>
            <h1 style={{textAlign:'left'}}>La bonne aide  au bon moment pour votre PME</h1>
            <h5>Notre algorithme trouve l'aide qu'il vous faut en fonction de vos enjeux !</h5>
            <Button color="primary" size='lg' style={{width:'50%'}}>Rechercher</Button>
        </Col>

        <Col sm="12" md="6" lg="6" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <img src='../images/sofia.png' style={{height:100, width:100}} />
            <Badge color="secondary">CEO</Badge>
            <img src='../images/frontperson.png' style={{height:350, width:450}}  />
            <div style={{ display:'flex', width:450}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src='../images/eric.png' style={{height:100, width:100}} />
                <Badge color="yellow">Assistant de direction</Badge>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img src='../images/jean.png' style={{height:100, width:100}}  />
                <Badge color="secondary" >Chef d'entreprise</Badge>
                </div>
            </div>
        </Col>
        </Row>
    </Container>


    )}
export default Landingpage;