import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage(props) {
   
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsUp, setListErrorsUp] = useState([]);
    const [visibility, setVisibility]= useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [user, setUser]= useState({
        firstName: "",
        lastName:"",
        email:'',
        phone:'',
        password:'',
        password2:'',
    })

    var handleSubmitSignUp = async () => {
      if(visibility==false && validEmail==true){
      var requete = await fetch('/users/sign-up',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "user=" + JSON.stringify(user) 
        });
        var response = await requete.json();
        if (response.result === true){
          props.connectFunction(response.token, response.firstName);
          setIsLogin(true);
        } else {
          setListErrorsUp(response.error)
        }
      }
      
    }

    var ValidateEmail= (email) => {
    var emailformat = /\S+@\S+\.\S+/;
    if (email.match(emailformat)) {
     setValidEmail(true) }
    else {
      setValidEmail(false)
    }
    console.log(validEmail)
    console.log(email)
    }
    
      var handleChange = (name,value) => {
        setUser({...user, [name]: value })
        if(value!==user.password){         
          setVisibility(true)
        } else{
          setVisibility(false)
          
        }
      }

      var tabError = listErrorsUp.map((error, i) => {
        return(<p style={{color:"red"}}>{error}</p>)
      });

      
if(isLogin==false){
return(
<div className="Login-page" >
            {/* SIGN-UP*/}
            <div className="Sign">
                <Input name="email" onChange={(e)=> {handleChange(e.target.name, e.target.value);ValidateEmail(e.target.value)}} value={user.email} className="Signup-input" placeholder="email" />
                <Input name="firstName" onChange={(e) => handleChange(e.target.name, e.target.value)} value={user.firstName} className="Signup-input" placeholder='Prénom' />
                <Input name="lastName" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.lastName} className="Signup-input" placeholder='Nom' />
                <Input name="phone" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.phone} className="Signup-input" placeholder="Téléphone" />
                <Input name="password" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.password} type='password'className="Signup-input" placeholder="Mot de passe" />
                <Input name="password2"  onChange={(e) => handleChange(e.target.name, e.target.value)} value={user.password2} type='password' className="Signup-input" placeholder="Répéter mot de passe" />
                {visibility?
                <p>No match between the 2 passwords</p>:
                <p></p>
                }
                {validEmail?
                <p></p>:
                <p>Format d'email non reconnu</p>
                }
                
                {tabError}
              <Button onClick={()=> handleSubmitSignUp()} style={{  background: "#0A62D0"}} type="primary">Sign up</Button>
              <Link to='signin' style={{marginTop:'50px'}}> I have already got an account. Log in !  </Link>
            </div>

          
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

function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids, aids: state.aids, token: state.user.token}}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
   )(SignupPage);
