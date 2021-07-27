import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage(props) {
   
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsUp, setListErrorsUp] = useState([]);
    const[visibility, setVisibility]= useState('hidden')
    const [user, setUser]= useState({
        firstName: "",
        lastName:"",
        email:'',
        siret:'',
        phone:'',
        position:'',
        company:'',
        password:'',
        confirmPassword:'',
    })

    var handleSubmitSignUp = async () => {
        var requete = await fetch('/sign-up',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "user=" + user 
        });
        var response = await requete.json();
        if (response.result === true){
          props.connectFunction(response.user);
          setIsLogin(true);
        } else {
          setListErrorsUp(response.error)
        }
      }

      const handleChange = (name, value) => {
        let copy={...user}
        copy[name]=value
        setUser({copy})
            console.log(user)
    
      }

      const handleChange2 = (name, value) => {
        setUser({...user, [name]: value })
      }

      const handleRepeat =(value)=>{
      
        if(user.confirmPassword!==user.password){
          setVisibility('visible')
        }
      }

      

return(
<div className="Login-page" >
            {/* SIGN-UP*/}
            <div className="Sign">
                <Input name="firstName" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.firstName} className="Signup-input" placeholder='Prénom' />
                <Input name="lastName" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.lastName} className="Signup-input" placeholder='Nom' />
                <Input name="email" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.email} className="Signup-input" placeholder="email" />
                <Input name="siret" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.siret} className="Signup-input" placeholder="N° SIRET" />
                <Input name="phone" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.phone} className="Signup-input" placeholder="Téléphone" />
                <Input name="position" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.position} className="Signup-input" placeholder="Fonction" />
                <Input name="company" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.company} className="Signup-input" placeholder="Entreprise" />
                <Input name="password" onChange={(e)=> handleChange(e.target.name, e.target.value)} value={user.password} type='password'className="Signup-input" placeholder="Password" />
                <Input name="passwordRepeat"  onChange={(e) =>handleRepeat(e.target.value)} value={user.confirmPassword} className="Signup-input" placeholder="Répéter Password" />
                <p style={{visibility:{visibility} }}>No match</p>
              <Button onClick={()=> handleSubmitSignUp()} style={{width:'80px',  background: "#0A62D0"}} type="primary">Sign up</Button>
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
