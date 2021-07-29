import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import {Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link, Redirect,useLocation} from 'react-router-dom';



function Navigation (props) {
   
const location = useLocation()
console.log(location.pathname)
var handleClick=()=>{
    if(location.pathname=='/useraccount' ){
    props.handleClickParent();
    }
}

    return ( 
   
<Row style={{display:'flex',justifyContent:'center', alignItems:'center'}}>       
    <Col sm="12" md="6" lg="6" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <img src='../images/EDIA.png'  height='120px' />
    </Col>

{props.token?
    <Col sm="12" md="6" lg="6" style={{ display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
        <Link><Button onClick={()=> {props.reinitialise(); handleClick()}} outline color="primary" size='lg' style={{margin:'20px'}} >Deconnexion</Button></Link>
        <div style={{ display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Link to='/useraccount'><Avatar size={64} icon={<UserOutlined />} /></Link>
            <p style={{fontSize:20,fontWeight:'bold'}}>Welcome {props.firstName}</p> 
        </div>
    </Col>
:
    <Col sm="12" md="6" lg="6" style={{ display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
        <Link to='/signin'><Button  outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button></Link>
        <Link to='/signup'><Button color="primary" size='lg'style={{margin:'20px'}}>S'inscrire</Button></Link>
    </Col>
}
</Row>

    )}

function mapStateToProps(state){
    return { token: state.user.token, firstName: state.user.firstName }
    }

function mapDispatchToProps(dispatch){
    return {
        reinitialise: function() {
        dispatch({type: 'disconnect', })},   
    }
    }


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    
    )(Navigation)    
