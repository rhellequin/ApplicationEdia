import React, { useState, useEffect } from 'react';

import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from './nav';

import { Input, Typography, Space,Avatar } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';


// composant de test :
import TestEngine from './testengine';

// Import des composants pour les critères de recherche :
import Types from './types';
import Domains from './domains';
import Projects from './projects';
import ActivitySector from './activitysector';
import Territories from './territories';
import NumberOfWorker from './numberofworker';
import CompanyAge from './companyage'; 



import 'bootstrap/dist/css/bootstrap.min.css';

function Landingpage(props) {

    const [onCallSearch, setOnCallSearch] = useState(false)


    useEffect(() => {

        
        const tb = [
        {
            composant : <Types/>,
            question : "Quel type d'aide recherchez vous ?",
            critere : "aidTypes",
            valeur: null
        },
        {
            composant : <Domains/>,
            question : "Quel secteur d'activité ?",
            critere : "aidActivitySector",
            valeur: null
        },
        {
            composant : <Projects/>, 
            question : "Quels enjeux souhaitez-vous poursuivre ?",
            critere : "aidProjects",
            valeur: null
        },
        
        {
            composant : <Territories/>,  
            question : "Quel est votre département ?",
            critere : "aidTerritories",
            valeur: null
        },
        {
            composant : <NumberOfWorker/>,  
            question : "Quel est l'effectif de votre entreprise ?",
            critere : "aidNumberOfWorker",
            valeur: null
        },
        {
            composant : <CompanyAge/>,  
            question : "Quel est l'age de votre entreprise ?",
            critere : "aidCompanyAge",
            valeur: null
        }]
    
    
        
        // Dans le Store :
        props.initSearchOptions(tb);
        // Indice du tableau de recherche :
        props.updateIndexOptions(0);
        // Compteur de recherche :
        props.updateNumberOfAids(0);
        



      }, [])



// Action Click sur Recherche :
    const callSearchPage = ()=> {
        setOnCallSearch(true);
}


    


// Call de la page de recherche :

if (onCallSearch) {
    return <Redirect to='searchPage'/>
}


// Landing Page :    

    return ( 
    
    <Container fluid={true}>
    
        <Nav/>

        <Row fluid={true} style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
        <Col sm="12" md="6" lg="6" style={{ display:'flex', flexDirection:'column',marginTop:'30px',justifyContent:'center', alignItems:'center'}} >
            <h1 style={{textAlign:'left', marginBottom:'10px',fontWeight:'bold' ,fontSize:70, fontFamily:'Spartan'}}>La bonne aide  au bon moment pour votre PME</h1>
            <h5 style={{marginBottom:'10px'}}>Notre algorithme trouve l'aide qu'il vous faut en fonction de vos enjeux !</h5>
            <Button color="primary" size='lg' style={{width:'30%', marginTop:'15px'}} onClick={() => callSearchPage()} >Rechercher</Button>
        </Col>

        <Col sm="12" md="6" lg="6" style={{display:'flex', flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
            <img src='../images/sofia.png' style={{height:100, width:100,marginTop:'15px'}} />
            <div style={{border:'1px black solid',borderColor:'yellow', borderRadius:'10px', fontSize:10, marginTop:'10px',padding:'0 5px  0 5px', backgroundColor:'yellow', color:'black'}} >CEO</div>
            <img src='../images/frontperson.png' style={{height:400, width:550}}  />
            <div style={{ display:'flex', width:450,justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src='../images/eric.png' style={{height:100, width:100}} />
                    <div style={{border:'1px black solid',borderColor:'grey',borderRadius:'10px', fontSize:10, marginTop:'10px' , padding:'0 5px  0 5px',backgroundColor:'grey', color:'white'}} >Assistant de direction</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src='../images/jean.png' style={{height:100, width:100}}  />
                    <div style={{border:'1px black solid',borderRadius:'10px', fontSize:10, margin:'auto', padding:'0 5px  0 5px',marginTop:'10px',backgroundColor:'black', color:'white'}} >Chef d'entreprise</div>
                </div>
            </div>
        </Col>
        </Row>
        <Row style={{justifyContent:'center', alignItems:'center',marginTop:'30px'}}>
            <Col sm="12"style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'50%',borderRadius:'10px', border:'1px solid black', textAlign:'center'}}>En utilisant EDIA vous acceptez notre politique de cookies</div>
            </Col>
        </Row>
        

{/* MEDIA  */}
        <Row style={{margin:'60px 0 60px 0'}}>
            <Col sm="12" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'60px'}}>
            <h1 style={{fontSize:50, fontWeight:'bold',fontFamily:'Spartan'}}>Fonctionnalités</h1>
            <h5 style={{fontSize:20}}>Vos recherches d’aides publiques deviennent</h5>
            </Col>
        </Row>

        <Row>
            <Media style={{display:'flex',alignItems:'center'}}>
                <Media object src="../images/yellow.png" alt="Icon with a robot" style={{marginRight:'20px'}}/>
                <Media body> 
                    <Media heading style={{fontSize:40,fontFamily:'Spartan',fontWeight:'Bold'}}>INTELLIGENTES</Media>
                    <Media style={{fontSize:20}} >En quelques clics</Media>
                    <Media >Nous vous posons quelques questions et notre algorithme s'occupe du reste pour trouver les aides qui correspondent au mieux aux besoins de votre entreprise.</Media>
                </Media>
            </Media>

            <Media style={{display:'flex',alignItems:'center'}}>
                <Media body> 
                    <Media heading style={{fontSize:40,textAlign:'right',fontFamily:'Spartan',fontWeight:'Bold'}}>EXHAUSTIVES</Media>
                    <Media style={{fontSize:20,textAlign:'right'}} >La puissance du big data</Media>
                    <Media style={{textAlign:'right'}}>Notre algorithme se charge de parcourir l'ensemble des dispositifs d'aides en France et en Europe. Vous êtes assuré(e) de ne manquer aucune aide publique pour développer votre entreprise.</Media>
                </Media>
                <Media object src="../images/grey.png" alt="Icon with a robot" style={{marginLeft:'20px'}} />
            </Media>

            <Media style={{display:'flex',alignItems:'center'}}>
                <Media object src="../images/blue.png" alt="Icon with a robot" style={{marginRight:'20px'}}/>
                <Media body> 
                    <Media heading style={{fontSize:40,fontFamily:'Spartan',fontWeight:'Bold'}}>AUTOMATISEES</Media>
                    <Media style={{fontSize:20}} >C'est un match !</Media>
                    <Media >Plus besoin de vérifier de manière régulière les nouveaux dispositifs d'aides. Une notification vous est envoyée quand une aide correspond à vos critères.</Media>
                </Media>
            </Media>
            
            
        </Row>

{/* CARTES CONTACT */}
        <Row style={{margin:'60px 0 60px 0'}}>
            <Col sm="12" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'60px'}}>
            <h1 style={{fontSize:50, fontWeight:'bold',fontFamily:'Spartan'}}>Nos clients</h1>
            <h5 style={{fontSize:20}}>Ils et elles nous ont fait confiance</h5>
            </Col>
        </Row>

        <Row >
            <Col sm="12" md="6" lg="4">
            <Card style={{display:'flex', alignItems:'center'}}>
                <CardImg top style={{margin:'20px',width:"50%",justifyContent:'center'}} src="../images/eric.png" alt="Card image cap" />
                <CardBody style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CardTitle tag="h1" style={{fontWeight:'bold'}}>Eric Son</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Assistant de direction - Bol d'air</CardSubtitle>
                    <CardText style={{textAlign:'justify'}}>Avant Edia, je passais un temps fou à rechercher les différents dispositifs d'aides publiques, et à rassembler les données pour en informer mon patron. Aujourd'hui je les retrouve en un coup d'oeil dans mon dashboard</CardText>
                </CardBody>
            </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
            <Card style={{display:'flex', alignItems:'center'}}>
                <CardImg top style={{margin:'20px',width:"50%",justifyContent:'center'}} src="../images/sofia.png" alt="Card image cap" />
                <CardBody style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CardTitle tag="h1" style={{fontWeight:'bold'}}>Sofia Antipolis</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">CEO - Getsy</CardSubtitle>
                    <CardText style={{textAlign:'justify'}}>Quand j'ai créé ma startup j'ai vite été perdue pour naviguer entre les différents dispositifs d'aides publiques auxquelles mon entreprise pouvait prétendre. Aujourd'hui avec Edia, aucune opportunité ne me passe sous le nez. Je viens de bénéficier d'une aide européenne. </CardText>
                </CardBody>
            </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
            <Card style={{display:'flex', alignItems:'center'}}>
                <CardImg  top style={{margin:'20px',width:"50%",justifyContent:'center'}} src="../images/jean.png" alt="Card image cap" />
                <CardBody style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CardTitle tag="h1" style={{fontWeight:'bold'}}>Jean Bonfromage</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Chef d'entreprise - Palaison Transports </CardSubtitle>
                    <CardText style={{textAlign:'justify'}}>Il y a un an je cherchais à conquérir de nouveaux marchés pour développer mon entreprise. Grâce à Edia j'ai entendu parler d'aides à l'embauche de la région Ile de France. Mon équipe commerciale a bien grandi depuis. </CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
        <Row style={{marginTop:'50px'}}>
            <Col sm="12" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginTop:'60px'}}>
            <h1 style={{fontSize:50, fontWeight:'bold'}}>Trouvez l'aide publique qu'il vous faut !</h1>
            <h5 style={{fontSize:20, marginTop:'50px'}}>En moins de 2mn ;</h5>
            <Link to='/searchPage'><Button type='button' color="primary" size='auto' style={{width:'150%', marginTop:'15px'}}>Rechercher</Button></Link>
            </Col>
        </Row>


{/* FOOTER */}
        <Row style={{display:'flex', margin:'50px 0 20px 0', backgroundColor:'grey  '}}>
            <Col style={{display:'flex', flexDirection:'column'}}>
                <h4>A propos</h4>
                <Link>Notre mission</Link>
                <Link>We're hiring !</Link>
            </Col>

            <Col>
                <h4>Ressources</h4>
                <Link>Blog</Link>
            </Col>

            <Col>
                <h4>Nous contacter</h4>
                <div>40 Rue des Boulangers</div>
                <div>75005</div>
                <div>06 18 44 98 45</div>
            </Col>

        </Row>

    </Container>
    )
}
/*
function mapStateToProps(state){
    return { token: state.user.token, firstName: state.user.firstName }
  }
*/


function mapDispatchToProps(dispatch){
    return {
      initSearchOptions: function(tb) {
        dispatch({type: 'initSearchOptions', searchOptions: tb})},
        
      updateIndexOptions: function(i) {
        dispatch({type: 'updateIndexOptions', indexOptions: i})},
        
      updateNumberOfAids: function(n) {
        dispatch({type: 'updateNumberOfAids', numberOfAids: n})}

    }
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(Landingpage)
  