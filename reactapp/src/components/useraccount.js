import React, { useState, useEffect } from 'react';
import { Input, Typography, Space, Menu, Form } from 'antd';
import { } from '@ant-design/icons'
import { Button, Col, Row, Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'antd/lib/layout/layout';
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

var souvenirParent 

function UserAccount(props) {

    const [isLogin, setIsLogin]=useState(false)

    var detectLogin = () => {
        setIsLogin(true);
      }

if(isLogin==false)
return (
<Container>
    <Nav handleClickParent={detectLogin}/>
    <Row  style={{width:'100%',display:'flex',alignItems:'center'}}>
        <Col style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            
            <Menu className='menu' >
                <Menu.Item className="active-icon-on-menu" key="1" icon={<HomeFilled style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  className="active-icon-on-menu"key="2" icon={<StarFilled style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item className="active-icon-on-menu" key="3" icon={<UserOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item className="active-icon-on-menu" key="4" icon={<DownloadOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  className="active-icon-on-menu"key="5" icon={<SettingOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  className="active-icon-on-menu"key="6" icon={<PoweroffOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
            </Menu>

        <Col className="colonne" >
            <h3>Bonjour {props.firstName}</h3>
            <h5>Vous avez 90% de profile complété</h5>
        </Col>
        </Col>

        <Col className="colonne" >
        <h3 style={{textAlign:'left'}} >Dirigeant de l'entreprise</h3>
        <h5 style={{textAlign:'left'}}>Duclos</h5>
        </Col>

        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Row>
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
else if( isLogin== true){
    return(<Redirect to='/landingpage' />)
}

}

function mapStateToProps(state){
    return { token: state.user.token, firstName: state.user.firstName }
    }


export default connect(
    mapStateToProps,
    null,
    
    )(UserAccount)  




