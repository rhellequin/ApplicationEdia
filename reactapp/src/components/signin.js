import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button, Col, Row, Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function SigninPage(props) {

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  const [listErrorsUp, setListErrorsUp] = useState([]);
  const [isResearch, setIsResearch] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [isAid, setIsAid] = useState(false)


  useEffect(() => console.log(isAid)

    , [isAid])






  var handleSubmitSignIn = async () => {
    if (validEmail == true) {
      var data = await fetch('/users/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: "email=" + signInEmail + "&password=" + signInPassword
      });
      var body = await data.json();
      if (body.result) {
        props.connectFunction(body.token, body.firstName);

        if (props.aids.length > 0) {
          setIsAid(true)
        }
        setIsLogin(true);
      } else {
        setListErrorsUp(body.error)
      }

      console.log(props.aids.length)

    }
  }
  // validation format email
  var ValidateEmail = (email) => {
    var emailformat = /\S+@\S+\.\S+/
    var emailTest = false
    if (email.match(emailformat)) {
      var emailTest = true
    }
    else {
      var emailTest = false
    }
    setValidEmail(emailTest)
  }
  if (validEmail == false) {
    var colorEmail = { color: 'red' }
    var iconEmail = faTimesCircle
  } else {
    var colorEmail = { color: 'green' }
    var iconEmail = faCheckCircle
  }

  var tabError = listErrorsUp.map((error, i) => {
    return (<p style={{ color: "red" }}>{error}</p>)
  });

  if (isLogin == false) {

    return (
      <div className="Login-page">

        <div className='Image'>
          <             Link to='/landingpage'><img src='../images/petit-logo-150x94-transparent.png' /></Link>
        </div>
        {/* SIGN-IN */}
        <div className="Sign">
          <div style={{ width:'300vh', marginTop: '-14vh', marginBottom: '17vh', height:"5vh", backgroundImage: "url(" + "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <p></p>
          </div>
          {tabError}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon style={colorEmail} icon={iconEmail} size='lg' />
            <Input style={{ marginLeft: '5px' }} onChange={(e) => { setSignInEmail(e.target.value); ValidateEmail(e.target.value) }} value={signInEmail} className="Signup-input" placeholder="email" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <Input onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} type='password' className="Signup-input" placeholder="mot de passe" />
          </div>
          <Button onClick={() => handleSubmitSignIn()} style={{ background: "#0A62D0" }} type="primary">Sign in</Button>
          <Link to='signup' style={{ marginTop: '50px' }}> No account yet ? </Link>
        </div>
      </div>
    );
  }
  else if (isLogin === true) {
    if (isAid == true) {
      return (
        <Redirect to='/resultPage' />
      )
    }
    else {
      return (
        <Redirect to='/landingpage' />
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    connectFunction: function (token, firstName) {
      dispatch({ type: 'login', token: token, firstName: firstName });
    }
  }
}

function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids, aids: state.aids, token: state.user.token }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninPage);
