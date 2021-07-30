// Import de la fonction (hook d'état)
import React, { useState, useEffect } from 'react';
import { Input, Typography, Space, Menu, Form } from 'antd';
import { } from '@ant-design/icons'
import { Button, Col, Row, Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media} from 'reactstrap';
import { Nav } from 'react-bootstrap';

import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'antd/lib/layout/layout';
import Navigation from './navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faDownload, faStar,faCog,faUser, faHouseUser, faVideo} from '@fortawesome/free-solid-svg-icons'

import '../components/useraccount.css'
import  './useraccount.css'
import signup from './signup';


var souvenirParent

function UserAccount(props) {

    const [isLogin, setIsLogin] = useState(false)

    // Initialisation des états et de leur setteur
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCompany, setUserCompany] = useState("");
    const [userSiret, setUserSiret] = useState("");
    const [userPosition, setUserPosition] = useState("");
    const [userAids, setUserAids] = useState("");


    const [userExists, setUserExists] = useState(false)
    const [favori, setFavori]= useState(false)
    const [donnee,setDonnee]= useState(false)


    useEffect(() => {
        const findUser = async() => {
            const data = await fetch(`users/infouser`, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
                body: `token=${props.token}`
        })
        const result = await data.json();
        console.log('resul :', result, );
        if (result.result) {
           
                setUserFirstName(result.user.firstName);
                setUserLastName(result.user.lastName);
                setUserPhone(result.user.phone);
                setUserEmail(result.user.email);
                setUserCompany(result.user.company);
                setUserSiret(result.user.siret);
                setUserPosition(result.user.position);
                setUserAids(result.user.userAids);
            }   else {
                console.log('pas trouve le user sur token :', props.token)
            } 
        }
        findUser();
      },[])











    var detectLogin = () => {
        setIsLogin(true);
    }





    var handleSubmitUserInfo = async () => {
        const data = await fetch("/users/update", {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
            body: `token=${props.token}&firstnameFromFront=${userFirstName}&lastnameFromFront=${userLastName}&phoneFromFront=${userPhone}&emailFromFront=${userEmail}&companyFromFront=${userCompany}&siretFromFront=${userSiret}&positionFromFront=${userPosition}`
        })
        const result = await data.json();
        console.log('resul :', result, );

    }

    var handleFavorite = async () =>{

    const data = await fetch('/useraid-favorite', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `token=${props.token}`
        })  
    const response = await data.json();
    console.log(response.userAids)

    // var favoriteList= response.userAids.map((aide,i))

    }

if (isLogin==false){
return (
<Container>
    <Navigation handleClickParent={detectLogin}/>
    <Row  style={{width:'100%',display:'flex',alignItems:'center', justifyContent:'center', margin:'30px 0 50px 0'}}>
        
    
        <Nav variant="tabs" style={{width:'50%'}} >
            <Nav.Item>
                <Nav.Link eventKey="link-1"onClick={()=>{setFavori(false);setDonnee(false)}}>Favoris</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={()=>{setFavori(true);setDonnee(true);handleFavorite(props.token)}} >Données perso</Nav.Link>
            </Nav.Item>
        </Nav>

    </Row>
    <Row>
        <Col className="colonne" >
            <h3>Bonjour {props.firstName}</h3>
            <h5>Vous avez 90% de profile complété</h5>
        </Col>

        <Col className="colonne" >
        <h3 style={{textAlign:'left'}} >Dirigeant de l'entreprise</h3>
        <h5 style={{textAlign:'left'}}>Duclos</h5>
        </Col>

        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'50px 0 0 0' }}>
                <Row style={{margin:'0 0 50px 0'}}>
                    <h1>Mes informations personnelles</h1>
                </Row>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

{ donnee == true ?

                <Form>
                    <Row>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserFirstName(e.target.value)} placeholder="Prénom" value={userFirstName}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserLastName(e.target.value)} placeholder="Nom" value={userLastName}/>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserPhone(e.target.value)} placeholder="Téléphone" value={userPhone}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserEmail(e.target.value)} placeholder="Mail" value={userEmail}/>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserCompany(e.target.value)} placeholder="Entreprise" value={userCompany}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserSiret(e.target.value)} placeholder="Siret" value={userSiret}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserPosition(e.target.value)} placeholder="Fonction" value={userPosition}/>
                        </Form.Item>
                    </Row>
                    <Form.Item>
                        <Button onClick={() => handleSubmitUserInfo()} style={{ width: '100px', background: "#0A62D0", }} type="primary">Enregister</Button>
                    </Form.Item>
                </Form>
    :
    null

} 
                </Col>
            </Row>
    </Row>
</Container>
)
}else if( isLogin== true){
    return(<Redirect to='/landingpage' />)
}

}

function mapStateToProps(state) {
    return { token: state.user.token, firstName: state.user.firstName }
}


export default connect(
    mapStateToProps,
    null,

)(UserAccount)




