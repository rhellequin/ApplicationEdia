import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SigninPage(props) {

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsUp, setListErrorsUp] = useState([]);

    var handleSubmitSignIn = async () => {
        var data = await fetch('/users/sign-in',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "email=" + signInEmail + "&password=" + signInPassword
        });  
        var body = await data.json();
        if(body.result){
          props.connectFunction(body.token,body.firstName);
          setIsLogin(true);
          console.log('body.result', body)
          console.log(body.result)
        } else {
          setListErrorsUp(body.error)
        }
      }

      var tabError = listErrorsUp.map((error, i) => {
        return(<p style={{color:"red"}}>{error}</p>)
      });


if(isLogin==false){
      
return(
<div className="Login-page" >
            
            {/* SIGN-IN */}
            <div className="Sign">
                <Input onChange={(e)=> setSignInEmail(e.target.value)} value={signInEmail} className="Signin-input" placeholder="johndoe@gmail.com" />
                <Input.Password onChange={(e)=> setSignInPassword(e.target.value)} value={signInPassword}  className="Signin-input" placeholder="mot de passe" />  
              <Button onClick={()=> handleSubmitSignIn()} style={{width:'80px',  background: "#0A62D0" }} type="primary">Sign in</Button>
            </div>
            {tabError}
        </div>
    );
}
else if (isLogin === true) {
  return (
    <Redirect to='/landingpage' />
  )
}
}

function mapDispatchToProps(dispatch){
    return{
      connectFunction: function(token,firstName){
        dispatch({type: 'login', token: token,firstName:firstName});
      }
    }
  }


export default connect(
    null,
    mapDispatchToProps
   )(SigninPage);
