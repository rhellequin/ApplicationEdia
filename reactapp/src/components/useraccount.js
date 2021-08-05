// Import de la fonction (hook d'état)
import React, { useState, useEffect } from 'react';
import { Input, Typography, Space, Menu, Form, Col, Row,Card } from 'antd';
import { } from '@ant-design/icons'
import { Button, Container, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media} from 'reactstrap';
import { Nav } from 'react-bootstrap';
import Bouton from './Bouton';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'antd/lib/layout/layout';
import Navigation from './navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faDownload, faStar,faCog,faUser, faHouseUser, faVideo} from '@fortawesome/free-solid-svg-icons'

import  './visuels/useraccount.css'
import signup from './signup';
import './visuels/resultPage.css';



function UserAccount(props) {

    const [isLogin, setIsLogin] = useState(true)

    // Initialisation des états et de leur setteur
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCompany, setUserCompany] = useState("");
    const [userSiret, setUserSiret] = useState("");
    const [userPosition, setUserPosition] = useState("");
    const [userAids, setUserAids] = useState("");


    const [userExists, setUserExists] = useState(false)
    const [donnee,setDonnee]= useState(true)
    const [favList,setFavList]= useState([])
    const[percentage,setPercentage] = useState()
    



    useEffect(() => {
        console.log(props.token)
        if(props.token==undefined){
            setIsLogin(false)
        }
        console.log(isLogin)
        
        const findUser = async() => {
            const data = await fetch(`users/infouser`, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
                body: `token=${props.token}`
        })
        const result = await data.json();
        console.log(result.userAids,'result')
        if (result.result) {
           
                setUserFirstName(result.user.firstName);
                setUserLastName(result.user.lastName);
                setUserPhone(result.user.phone);
                setUserEmail(result.user.email);
                setUserCompany(result.user.company);
                setUserSiret(result.user.siret);
                setUserPosition(result.user.position);
                setUserAids(result.user.userAids);
                setFavList(result.user.userAids)
            } 
    }
        findUser(); },[isLogin])


    var detectLogin = () => {
        setIsLogin(false);
    }

    var handleSubmitUserInfo = async () => {
        const data = await fetch("/users/update", {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
            body: `token=${props.token}&firstnameFromFront=${userFirstName}&lastnameFromFront=${userLastName}&phoneFromFront=${userPhone}&emailFromFront=${userEmail}&companyFromFront=${userCompany}&siretFromFront=${userSiret}&positionFromFront=${userPosition}`
        })
        const result = await data.json();

        const pourcentage2= [userFirstName, userLastName, userPhone, userEmail,userCompany,userSiret,userPosition]
        var count= 0
        
        for(var i=0; i<pourcentage2.length; i++){
            if(pourcentage2[i]!=''){
                count =count + 100/7
            }
        }
        setPercentage(Math.floor(count))
    }


//ajout favoris au lcik sur etoile
var addUserAid= async(aide,id)=>{
    console.log(aide)
    console.log(aide.id)
    var copyList=[...favList]
        copyList=copyList.map((aide,i)=>{
            if(aide.favorite==undefined ){
                if(aide.id==id){
                return {...aide,favorite:false}}
            }    
        })

    var newFavorite
        if(aide.favorite==undefined || aide.favorite==false){
              newFavorite=false}
        else if(aide.favorite==true){
              newFavorite=false}

        const data = await fetch('/add-favorite', {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `id=${id}&token=${props.token}&favorite=${newFavorite}`
                })  
    const response = await data.json();
    var listCopy=[...response.user.userAids] 
    if (response.result==false){
        setIsLogin(false)}
    else {
        setFavList(listCopy)
    }            
} 

if (isLogin==true){

return (
<div>
    <Navigation handleClickParent={detectLogin}/>
    
    <Row style= {{marginTop: '-1vh', height:"5vh", backgroundImage: "url(" + "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    <Row>
    </Row>
    </Row>

    <Row  style={{width:'100%',display:'flex',alignItems:'center', justifyContent:'center', margin:'30px 0 50px 0'}}>
    
        <Nav variant="tabs" style={{marginRight: '95vh', width:'50vh'}} >
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>setDonnee(true)} >Données perso</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link styleeventKey="link-1 "  onClick={()=>setDonnee(false)}>Favoris</Nav.Link>
            </Nav.Item>
        </Nav>

    </Row>
    
    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'50px 0 0 0' }}>
        <Col style={{marginLeft: '-12vh'}} className="colonne">
            <h3>Bonjour {props.firstName}</h3>
            <h5>Votre profil est complété à {percentage}%</h5>
        </Col>

        <Col style={{marginRight: '-9vh'}} className="colonne">
        <h3 style={{textAlign:'left'}} >Entreprise</h3>
        <h5 style={{textAlign:'left'}}>{userCompany}</h5>
        </Col>
    </Row>
{ donnee === true ?

        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '8vh' }}>
                <Row style={{width: '144vh'}}>
                    <h1>Mes informations personnelles</h1>
                </Row>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                <Form>
                    <Row>
                        <Form.Item style={{ width: '345px', marginRight: '3vh' }} label="">
                            <Input onChange={(e) => setUserFirstName(e.target.value)} placeholder="Prénom" value={userFirstName}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserLastName(e.target.value)} placeholder="Nom" value={userLastName}/>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item style={{ width: '345px', marginRight: '3vh' }} label="">
                            <Input onChange={(e) => setUserPhone(e.target.value)} placeholder="Téléphone" value={userPhone}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserEmail(e.target.value)} placeholder="Mail" value={userEmail}/>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item style={{ width: '345px', marginRight: '3vh' }} label="">
                            <Input onChange={(e) => setUserCompany(e.target.value)} placeholder="Entreprise" value={userCompany}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px', marginRight: '3vh' }} label="">
                            <Input onChange={(e) => setUserSiret(e.target.value)} placeholder="Siret" value={userSiret}/>
                        </Form.Item>
                        <Form.Item style={{ width: '345px' }} label="">
                            <Input onChange={(e) => setUserPosition(e.target.value)} placeholder="Fonction" value={userPosition}/>
                        </Form.Item>
                    </Row>
                    <Form.Item>
                        <Button onClick={() => handleSubmitUserInfo()} style={{ fontSize: 20, fontWeight: 'regular', width: '30vh', background: "#0A62D0",  marginTop: '4vh'  }} type="primary">Enregister</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    :
    <Row  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'50px 0 0 0' }}>   


{favList.length>0 ?

favList.map((aide,i) =>{


    return(
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} key={i}>
     
            <Card  className='CardAid'>
                    
                    <Row  className='CardRang1'>
                          {/* <img src={aide.logo} alt='' height='80px' /> */}
                          <img  alt='' height='80px' />
                          <p><FontAwesomeIcon icon={faStar} size='2x'
                                style={{color:'yellow'}} onClick={()=>addUserAid(aide,aide._id)}
                              />
                          </p>
                    </Row>
          
                    <Row className='CardAidName'>
                          <div style={{marginBottom:'10px'}}>{aide.name}</div>
                    </Row>
                    
                    <Row className='CardAidMontant' >
                          <div>{aide.aidAmount}€</div>
                    </Row>
    
                    <Row className='CardAidInfo' >
                  
                          <div className='CardAidInfoInf' >
                              <p>Difficulté d'obtention: Essai</p>
                              <p>Délai d'obtention:Essai</p>
                          </div>
                    </Row>
                  
                    <Row className='CardAidbouton'>          
                          <Bouton />
                    </Row>
                      
            </Card>
    
        </Col>

) 
})

:
<p>Pas de favorite</p>
}
</Row>
} 

</div>
)
}
else if( isLogin== false){
    return(<Redirect to='/landingpage' />)
}

}

function mapStateToProps(state) {
    return { token: state.user.token, firstName: state.user.firstName }
}


export default connect(
    mapStateToProps,
    null,

)(UserAccount)




