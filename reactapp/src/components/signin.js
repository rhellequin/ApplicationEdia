import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SigninPage(props) {
   
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsIn, setListErrorsIn] = useState([]);
    const [listErrorsUp, setListErrorsUp] = useState([]);

    var handleSubmitSignIn = async () => {
        var requete = await fetch('/sign-in',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "email=" + signInEmail + "&password=" + signInPassword
        });
        var response = await requete.json();
        if (response.result === true){
          props.connectFunction(response.user);
          setIsLogin(true);
        } else {
          setListErrorsIn(response.error2)
        }
      }


return(
<div className="Login-page" >
            {/* SIGN-IN */}
            <div className="Sign">
                <Input onChange={(e)=> setSignInEmail(e)} value='' className="Login-input" placeholder="arthur@lacapsule.com" />
                <Input.Password onChange={(e)=> setSignInPassword(e.target.value)} value={signInPassword}  className="Login-input" placeholder="password" />  
              <Button onClick={()=> handleSubmitSignIn()} style={{width:'80px'}} type="primary">Sign-in</Button>
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
   )(SigninPage);
