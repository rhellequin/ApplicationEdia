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
<<<<<<< HEAD
import Navigation from './navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faDownload, faStar,faCog,faUser, faHouseUser, faVideo} from '@fortawesome/free-solid-svg-icons'

  import '../components/useraccount.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import  './useraccount.css'
=======
import Nav from './nav';
import {
    HomeFilled,
    StarFilled,
    UserOutlined,
    DownloadOutlined,
    SettingOutlined,
    PoweroffOutlined,
} from '@ant-design/icons';
import '../components/useraccount.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import signup from './signup';
<<<<<<< HEAD
import { data } from 'jquery';
>>>>>>> 00079fad4ea95ae067f44b53fe7af35804b035de
=======
// import { data } from 'jquery';
>>>>>>> 8ac76205610e02420087ddf0f4daf98a28dd1330

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
    const [userRole, setUserRole] = useState("");

    var detectLogin = () => {
        setIsLogin(true);
<<<<<<< HEAD
      }

if(isLogin==false){
return (
<Container>
    <Navigation handleClickParent={detectLogin}/>
    <Row  style={{width:'100%',display:'flex',alignItems:'center', justifyContent:'center', margin:'30px 0 50px 0'}}>
        
    
        <Nav variant="tabs" style={{width:'50%'}} >
            <Nav.Item>
                <Nav.Link eventKey="link-1">Favoris</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Données perso</Nav.Link>
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

                    <Form>
                        <Row>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Prénom" />
                            </Form.Item>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Nom" />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Téléphone" />
                            </Form.Item>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Mail" />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Entreprise" />
                            </Form.Item>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Siret" />
                            </Form.Item>
                            <Form.Item style={{ width: '345px' }} label="">
                                <Input placeholder="Fonction" />
                            </Form.Item>
                        </Row>
                        <Form.Item>
                            <Button style={{ width: '100px', background: "#0A62D0", }} type="primary">Enregister</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
    </Row>
</Container>
)
}else if( isLogin== true){
    return(<Redirect to='/landingpage' />)
}
=======
    }

    // Création d’une fonction qui va nous permettre d’incrémenter notre état

    const [userExists, setUserExists] = useState(false)

    var handleSubmitUserInfo = async () => {
        const data = await fetch("/users/update", {
            method: "POST",
            headers: { "Content-Type": "application/w-www-form-urlencoded" },
            body: `firstnameFromFront=${userFirstName}&lastnameFromFront=${userLastName}&phoneFromFront=${userPhone}&emailFromFront=${userEmail}&companyFromFront=${userCompany}&siretFromFront=${userSiret}&roleFromFront=${userRole}`
        })
        const body = await data.json

        if (body.result == true) {
            setUserExists(true)
        }

    }

    if (userExists) {
        return <Redirect to = "/useraccount"/>
    }

if (isLogin == false)
            return (
                <Container>
                    <Nav handleClickParent={detectLogin} />
                    <Row style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                            <Menu className='menu' >
                                <Menu.Item className="active-icon-on-menu" key="1" icon={<HomeFilled style={{ fontSize: '30px', textAlign: 'center' }} />} />
                                <Menu.Item className="active-icon-on-menu" key="2" icon={<StarFilled style={{ fontSize: '30px', textAlign: 'center' }} />} />
                                <Menu.Item className="active-icon-on-menu" key="3" icon={<UserOutlined style={{ fontSize: '30px', textAlign: 'center' }} />} />
                                <Menu.Item className="active-icon-on-menu" key="4" icon={<DownloadOutlined style={{ fontSize: '30px', textAlign: 'center' }} />} />
                                <Menu.Item className="active-icon-on-menu" key="5" icon={<SettingOutlined style={{ fontSize: '30px', textAlign: 'center' }} />} />
                                <Menu.Item className="active-icon-on-menu" key="6" icon={<PoweroffOutlined style={{ fontSize: '30px', textAlign: 'center' }} />} />
                            </Menu>

                            <Col className="colonne" >
                                <h3>Bonjour {props.firstName}</h3>
                                <h5>Vous avez 90% de profile complété</h5>
                            </Col>
                        </Col>

                        <Col className="colonne" >
                            <h3 style={{ textAlign: 'left' }} >Dirigeant de l'entreprise</h3>
                            <h5 style={{ textAlign: 'left' }}>Duclos</h5>
                        </Col>

                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Row>
                                <h1>Mes informations personnelles</h1>
                            </Row>
                            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                                <Form>
                                    <Row>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserFirstName(e.target.value)} placeholder="Prénom" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserLastName(e.target.value)} placeholder="Nom" />
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserPhone(e.target.value)} placeholder="Téléphone" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserEmail(e.target.value)} placeholder="Mail" />
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserCompany(e.target.value)} placeholder="Entreprise" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserSiret(e.target.value)} placeholder="Siret" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserRole(e.target.value)} placeholder="Fonction" />
                                        </Form.Item>
                                    </Row>
                                    <Form.Item>
                                        <Button onClick={() => handleSubmitUserInfo()} style={{ width: '100px', background: "#0A62D0", }} type="primary">Enregister</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            )
        else if (isLogin == true) {
            return (<Redirect to='/landingpage' />)
        }
>>>>>>> 00079fad4ea95ae067f44b53fe7af35804b035de

}

function mapStateToProps(state) {
    return { token: state.user.token, firstName: state.user.firstName }
}


export default connect(
    mapStateToProps,
    null,

)(UserAccount)




