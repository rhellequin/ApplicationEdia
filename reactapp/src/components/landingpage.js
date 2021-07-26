import React, {useState, useEffect } from 'react';
import {Input, Typography, Space } from 'antd'; 
import { Button,Badge,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Landingpage () {

    return ( 
    
    <Container fluid={true}>

        <Row style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Col sm="12" md="6" lg="6" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <img src='../images/EDIA.png'  height='120px' />
        </Col>
        <Col sm="12" md="6" lg="6" style={{ display:'flex',justifyContent:'flex-end', alignItems:'self-end'}}>
            <Button outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button>
            <Button color="primary" size='lg'style={{margin:'20px'}}>S'inscrire</Button>
        </Col>
        </Row>

        <Row fluid={true} style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
        <Col sm="12" md="6" lg="6" style={{ display:'flex', flexDirection:'column',marginTop:'30px',justifyContent:'center', alignItems:'center'}} >
            <h1 style={{textAlign:'left', marginBottom:'10px',fontWeight:'bold' ,fontSize:70, fontFamily:''}}>La bonne aide  au bon moment pour votre PME</h1>
            <h5 style={{marginBottom:'10px'}}>Notre algorithme trouve l'aide qu'il vous faut en fonction de vos enjeux !</h5>
            <Button color="primary" size='lg' style={{width:'30%', marginTop:'15px'}}>Rechercher</Button>
        </Col>

        <Col sm="12" md="6" lg="6" style={{display:'flex', flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
            <img src='../images/sofia.png' style={{height:100, width:100,marginTop:'15px'}} />
            <div style={{border:'1px black solid',borderColor:'yellow', borderRadius:'10px', fontSize:10, marginTop:'10px',padding:'0 5px  0 5px', backgroundColor:'yellow', color:'black'}} >CEO</div>
            <img src='../images/frontperson.png' style={{height:400, width:550}}  />
            <div style={{ display:'flex', width:450,justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src='../images/eric.png' style={{height:100, width:100}} />
                    <div style={{border:'1px black solid',borderColor:'grey',borderRadius:'10px', fontSize:10, marginTop:'10px' , padding:'0 5px  0 5px',backgroundColor:'grey', color:'white'}} >Assistant de direction</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src='../images/jean.png' style={{height:100, width:100}}  />
                    <div style={{border:'1px black solid',borderRadius:'10px', fontSize:10, margin:'auto', padding:'0 5px  0 5px',marginTop:'10px',backgroundColor:'black', color:'white'}} >Chef d'entreprise</div>
                </div>
            </div>
        </Col>
        </Row>
        <Row style={{justifyContent:'center', alignItems:'center',marginTop:'30px'}}>
            <Col sm="12"style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'50%',borderRadius:'10px', border:'1px solid black', textAlign:'center'}}>En utilisant EDIA vous acceptez notre politique de cookies</div>
            </Col>
        </Row>
        <Row >
            <Col sm="12" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'60px'}}>
            <h1 style={{fontSize:50, fontWeight:'bold'}}>Nos clients</h1>
            <h5 style={{fontSize:20}}>Ils et elles nous ont fait confiance</h5>
            </Col>
        </Row>

{/* CARTES CONTACT */}


        <Row style={{marginTop:'50px'}}>
            <Col sm="12" md="6" lg="4">
            <Card style={{display:'flex', alignItems:'center'}}>
                <CardImg top style={{margin:'20px',width:"50%",justifyContent:'center'}} src="../images/eric.png" alt="Card image cap" />
                <CardBody style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CardTitle tag="h1" style={{fontWeight:'bold'}}>Eric Son</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Assistant de direction - Bol d'air</CardSubtitle>
                    <CardText style={{textAlign:'justify'}}>Avant Edia, je passais un temps fou à rechercher les différents dispositifs d'aides publiques, et à rassembler les données pour en informer mon patron. Aujourd'hui je les retrouve en un coup d'oeil dans mon dashboard</CardText>
                </CardBody>
            </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
            <Card style={{display:'flex', alignItems:'center'}}>
                <CardImg top style={{margin:'20px',width:"50%",justifyContent:'center'}} src="../images/sofia.png" alt="Card image cap" />
                <CardBody style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CardTitle tag="h1" style={{fontWeight:'bold'}}>Sofia Antipolis</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">CEO - Getsy</CardSubtitle>
                    <CardText style={{textAlign:'justify'}}>Quand j'ai créé ma startup j'ai vite été perdue pour naviguer entre les différents dispositifs d'aides publiques auxquelles mon entreprise pouvait prétendre. Aujourd'hui avec Edia, aucune opportunité ne me passe sous le nez. Je viens de bénéficier d'une aide européenne. </CardText>
                </CardBody>
            </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
            <Card style={{display:'flex', alignItems:'center'}}>
                <CardImg  top style={{margin:'20px',width:"50%",justifyContent:'center'}} src="../images/jean.png" alt="Card image cap" />
                <CardBody style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CardTitle tag="h1" style={{fontWeight:'bold'}}>Jean Bonfromage</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Chef d'entreprise - Palaison Transports </CardSubtitle>
                    <CardText style={{textAlign:'justify'}}>Il y a un an je cherchais à conquérir de nouveaux marchés pour développer mon entreprise. Grâce à Edia j'ai entendu parler d'aides à l'embauche de la région Ile de France. Mon équipe commerciale a bien grandi depuis. </CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
        <Row style={{marginTop:'50px'}}>
            <Col sm="12" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'60px'}}>
            <h1 style={{fontSize:50, fontWeight:'bold'}}>Trouvez l'aide publique qu'il vous faut !</h1>
            <h5 style={{fontSize:20, marginTop:'50px'}}>En moins de 2mn ;)</h5>
            <Button color="primary" size='lg' style={{width:'30%', marginTop:'60px'}}>Rechercher</Button>
            </Col>
        </Row>

    </Container>


    )}
export default Landingpage;