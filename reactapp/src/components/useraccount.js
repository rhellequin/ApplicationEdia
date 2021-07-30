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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faDownload, faStar,faCog,faUser, faHouseUser, faVideo} from '@fortawesome/free-solid-svg-icons'

import '../components/useraccount.css'
import  './useraccount.css'
import Navigation from './navigation';
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
// import { data } from 'jquery';
// import { data } from 'jquery';

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

    var detectLogin = () => {
        setIsLogin(true);
    }

    // Création d’une fonction qui va nous permettre d’incrémenter notre état

    const [userExists, setUserExists] = useState(false)

    var handleSubmitUserInfo = async () => {
        const data = await fetch("/users/update", {
            method: "POST",
            headers: { "Content-Type": "application/w-www-form-urlencoded" },
            body: `firstnameFromFront=${userFirstName}&lastnameFromFront=${userLastName}&phoneFromFront=${userPhone}&emailFromFront=${userEmail}&companyFromFront=${userCompany}&siretFromFront=${userSiret}&positionFromFront=${userPosition}`
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
                    <Navigation handleClickParent={detectLogin} />
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
                                            <Input onChange={(e) => setUserFirstName(e.target.value)} value={userFirstName} placeholder="Prénom" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserLastName(e.target.value)} value={userLastName} placeholder="Nom" />
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserPhone(e.target.value)} value={userPhone} placeholder="Téléphone" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} placeholder="Mail" />
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserCompany(e.target.value)} value={userCompany} placeholder="Entreprise" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserSiret(e.target.value)} value={userSiret} placeholder="Siret" />
                                        </Form.Item>
                                        <Form.Item style={{ width: '345px' }} label="">
                                            <Input onChange={(e) => setUserPosition(e.target.value)} value={userPosition} placeholder="Fonction" />
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

}

function mapStateToProps(state) {
    return { token: state.user.token, firstName: state.user.firstName }
}

export default connect(
    mapStateToProps,
    null,

)(UserAccount)