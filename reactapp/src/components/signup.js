import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage(props) {

    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsIn, setListErrorsIn] = useState([]);
    const [listErrorsUp, setListErrorsUp] = useState([]);

    var handleSubmitSignUp = async () => {
        var data = await fetch('/sign-up',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "username=" + signUpUsername + "&email=" + signUpEmail + "&password=" + signUpPassword
        });  
        var body = await data.json();
        var user = body.userSaved;
        if(body.result){
          props.connectFunction(user);
          setIsLogin(true);
        } else {
          setListErrorsUp(body.error)
        }
      }



return(
<div className="Login-page" >
            
            {/* SIGN-UP */}
            <div className="Sign">
                <Input onChange={(e)=> setSignUpUsername(e.target.value)} value={signUpUsername} className="Login-input" placeholder="Arthur G" />
                <Input onChange={(e)=> setSignUpEmail(e.target.value)} value={signUpEmail} className="Login-input" placeholder="arthur@lacapsule.com" />
                <Input.Password onChange={(e)=> setSignUpPassword(e.target.value)} value={signUpPassword}  className="Login-input" placeholder="password" />
              <Button onClick={()=> handleSubmitSignUp()} style={{width:'80px'}} type="primary">Sign-up</Button>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch){
    return{
      connectFunction: function(user){
        dispatch({type: 'connection', user: user});
      }
    }
  }


export default connect(
    null,
    mapDispatchToProps
   )(SignupPage);
