import React, { useState, useEffect } from 'react';
import { Input, Typography, Space,Menu } from 'antd';
import {}from '@ant-design/icons'
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
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
  import '../App.css'
import { propTypes } from 'react-bootstrap/esm/Image';




function UserAccount (props) {


return (
<Container>
    <Nav/>
    <Row  style={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>
        <Col style={{display:'flex', alignItems:'center', justifyContent:'left'}}>
            
            <Menu style={{backgroundColor:'#0A62D0', border:'3px solid',borderRadius:'3',borderColor:'#2ADAED' ,color:'white', width:67, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Menu.Item  key="1" icon={<HomeFilled style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  key="2" icon={<StarFilled style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  key="3" icon={<UserOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  key="4" icon={<DownloadOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  key="5" icon={<SettingOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
                <Menu.Item  key="6" icon={<PoweroffOutlined style={{fontSize:'30px',textAlign:'center'}}/>}/>
            </Menu>

        <Col style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>
            <h1>Bonjour Cyprien</h1>
            <h5>Vous avez 90% de profile complété</h5>
        </Col>
        </Col>

        <Col style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign:'right'}}>
        <h3>Dirigeant de l'entreprise</h3>
        <h5>Duclos</h5>
        </Col>
    </Row>
</Container>
)


}

export default UserAccount


