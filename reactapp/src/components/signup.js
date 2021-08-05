import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage(props) {
   
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsUp, setListErrorsUp] = useState([]);
    const [visibility, setVisibility]= useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPhone, setValidPhone] = useState(false)
    const [isAid, setIsAid]= useState(false)
    const [user, setUser]= useState({
        firstName: "",
        lastName:"",
        email:'',
        phone:'',
        password:'',
        password2:'',
    })

    var handleSubmitSignUp = async () => {
      if(visibility==true && validEmail==true && validPhone ==true){
      var requete = await fetch('/users/sign-up',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "user=" + JSON.stringify(user) 
        });
        var response = await requete.json();
        if (response.result === true){
          props.connectFunction(response.token, response.firstName);
          if(props.aids.length>0){
            setIsAid(true)
          }  
          setIsLogin(true);
        } else {
          setListErrorsUp(response.error)
        }
      }
      
    }

    var ValidateEmail= (email) => {
    var emailformat = /\S+@\S+\.\S+/
    var emailTest= false
    if (email.match(emailformat)) {
     var emailTest=true }
    else {
      var emailTest=false
    }
    setValidEmail(emailTest)
    }
    
    var ValidatePhone=(phone)=>{
      var valid = false
      for(var i=1; i<(phone.length-1); i++){
        if(typeof phone[i]!='number'){
          valid =false 
        }  
      }

      if((phone[0]=='+' && phone.length==12) || (phone[0]=='0' && phone.length==10)) {
        valid=true
      }
    setValidPhone(valid)
    console.log(validPhone)
    }
  
    var handleChange = (name,value) => {
      setUser({...user, [name]: value })
    }

    var ValidatePassword = (name,value)=>{
      var test = false
      setUser({...user, [name]: value })

      if(value!==user.password){         
        test=false
      } else {
        test=true
      }
      setVisibility(test)
    }

    if(visibility==false){
    var color = {color: 'red'}
    var icon = faTimesCircle
    } else{
    var color = {color: 'green'}
    var icon = faCheckCircle
    }

    if(validEmail==false){
      var colorEmail = {color: 'red'}
      var iconEmail = faTimesCircle
      } else{
      var colorEmail = {color: 'green'}
      var iconEmail = faCheckCircle
      }
    if(validPhone==false){
      var colorPhone = {color: 'red'}
      var iconPhone = faTimesCircle
      } else{
      var colorPhone = {color: 'green'}
      var iconPhone = faCheckCircle
      }

    

      var tabError = listErrorsUp.map((error, i) => {
        return(<p style={{color:"red"}}>{error}</p>)
      });

      
if(isLogin==false){
return(
<div className="Login-page" >
            <div className="Image">
              <Link to='/landingpage'><img src='../images/petit-logo-150x94-transparent.png'/></Link>
            </div>
            {/* SIGN-UP*/}
            <div className="Sign">
            <div style={{ width:'300vh', marginTop: '-14vh', marginBottom: '17vh', height:"5vh", backgroundImage: "url(" + "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <p></p>
          </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <FontAwesomeIcon style={colorEmail} icon={iconEmail} size='lg'/>
                <Input name="email" onChange={(e)=> {handleChange(e.target.name, e.target.value);ValidateEmail(e.target.value)}} value={user.email} className="Signup-input" placeholder="email" />
              </div>
              <div style={{display:'flex', alignItems:'center',marginLeft:'20px'}}>
                <Input  name="firstName" onChange={(e) => handleChange(e.target.name, e.target.value)} value={user.firstName} className="Signup-input" placeholder='Prénom' />
              </div> 
              <div style={{display:'flex', alignItems:'center',marginLeft:'20px'}}>
                <Input name="lastName" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.lastName} className="Signup-input" placeholder='Nom' />
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <FontAwesomeIcon style={colorPhone} icon={iconPhone} size='lg'/>  
                <Input name="phone" onChange={(e)=> {handleChange(e.target.name, e.target.value);ValidatePhone(e.target.value)}} value={user.phone} className="Signup-input" placeholder="Téléphone" />
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <FontAwesomeIcon style={color} icon={icon} size='lg'/>
                <Input name="password" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.password} type='password'className="Signup-input" placeholder="Mot de passe" />
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <FontAwesomeIcon  style={color} icon={icon} size='lg'/>
                <Input name="password2"  onChange={(e) => {handleChange(e.target.name, e.target.value);ValidatePassword(e.target.name, e.target.value)}} value={user.password2} type='password' className="Signup-input" placeholder="Répéter mot de passe" />
              </div>
                
                {tabError}
              <Button onClick={()=> handleSubmitSignUp()} style={{  background: "#0A62D0"}} type="primary">Sign up</Button>
              <Link to='signin' style={{marginTop:'50px'}}> I have already got an account. Log in !  </Link>
            </div>

          
</div>
    );
}
else if (isLogin === true) {
  if(isAid==true){
    return (
    <Redirect to='/resultPage' />
    )
  }
  else{
    return (
    <Redirect to='/landingpage' />
  )
  }
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
