import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage(props) {
   
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsUp, setListErrorsUp] = useState([]);
    const[visibility, setVisibility]= useState(false)
    const [match,setMatch]=useState(false);

    const [user, setUser]= useState({
        firstName: "",
        lastName:"",
        email:'',
        phone:'',
        password:'',
        password2:'',
    })






    var handleSubmitSignUp = async () => {
      if(visibility==false){
      var requete = await fetch('/users/sign-up',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "user=" + JSON.stringify(user) 
        });
        var response = await requete.json();
        if (response.result === true){
          props.connectFunction(response.user);
          setIsLogin(true);
        } else {
          setListErrorsUp(response.error)
        }
      }
      else{
        setMatch(true)
      }
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
                <Input name="firstName" onChange={(e) => handleChange(e.target.name, e.target.value)} value={user.firstName} className="Login-input" placeholder='Prénom' />
                <Input name="lastName" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.lastName} className="Login-input" placeholder='Nom' />
                <Input name="email" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.email} className="Login-input" placeholder="email" />
                <Input name="phone" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.phone} className="Login-input" placeholder="Téléphone" />
                <Input name="password" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.password} type='password'className="Login-input" placeholder="Password" />
                <Input name="password2"  onChange={(e) => handleChange(e.target.name, e.target.value)} value={user.password2} type='password' className="Login-input" placeholder="Répéter Password" />
                {visibility?
                <p>No match</p>:
                <p></p>
                }
                {match?
                <p>Vérifiez vos mots de passe</p>:
                <p></p>}
                {tabError}
              <Button onClick={()=> handleSubmitSignUp()} style={{width:'80px'}} type="primary">Sign-up</Button>
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
      connectFunction: function(user){
        dispatch({type: 'connection', user: user});
      }
    }
  }


export default connect(
    null,
    mapDispatchToProps
   )(SignupPage);
