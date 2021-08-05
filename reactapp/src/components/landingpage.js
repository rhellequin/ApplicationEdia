import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './navigation';


import { Button, Col, Row, Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media} from 'reactstrap';



// Import des composants pour les critères de recherche :
import Types from './types';
import Domains from './domains';
import Projects from './projects';
import Territories from './territories';
import NumberOfWorker from './numberofworker';
import CompanyAge from './companyage';
import Profiles from './profiles';



import 'bootstrap/dist/css/bootstrap.min.css';

function Landingpage(props) {

    const [onCallSearch, setOnCallSearch] = useState(false)

    useEffect(() => {


        const tb = [
            {
                composant: <Types />,
                question: "Quel type d'aide recherchez vous ?",
                critere: "aidTypes",
                valeur: null
            },
            {
                composant: <Domains />,
                question: "Quel secteur d'activité ?",
                critere: "aidActivitySector",
                valeur: null
            },
            {
                composant: <Projects />,
                question: "Quels enjeux souhaitez-vous poursuivre ?",
                critere: "aidProjects",
                valeur: null
            },

            {
                composant: <Territories />,
                question: "Quel est votre département ?",
                critere: "aidTerritories",
                valeur: null
            },

            {
                composant: <Profiles />,
                question: "Quel est le profil de votre entreprise?",
                critere: "aidProfiles",
                valeur: null
            },
            {
                composant: <NumberOfWorker />,
                question: "Quel est l'effectif de votre entreprise ?",
                critere: "aidNumberOfWorker",
                valeur: null
            },
            {
                composant: <CompanyAge />,
                question: "Quel est l'age de votre entreprise ?",
                critere: "aidCompanyAge",
                valeur: null
            }]



        // Dans le Store :
        props.initSearchOptions(tb);
        // Indice du tableau de recherche :
        props.updateIndexOptions(0);
        // Compteur de recherche :
        props.updateNumberOfAids(0);
        //Nombre d'aide
        props.reinitialiseAids()



      }, [])

// Action Click sur Recherche :
    const callSearchPage = ()=> {

        setOnCallSearch(true);
    }





    // Call de la page de recherche :

    if (onCallSearch) {
        return <Redirect to='searchPage' />
    }

    // Landing Page :    

    return ( 

            <Container fluid={true} style={{marginLeft: '-2vh'}}>

                <Navigation/>

                <Row fluid={true} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Col sm="12" md="6" lg="6" style={{ display: 'flex', flexDirection: 'column', marginTop: '30px', justifyContent: 'center', alignItems: 'center' }} >
                        <h1 style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Spartan', color: "#191718", textAlign: 'left', margin: '4vh' }}>La bonne aide  au bon moment pour votre PME</h1>
                        <h5 style={{ fontSize: 20, fontWeight: 'regular', fontFamily: 'Inter', color: "#191718", textAlign: 'left', margin: '1vh', width: '90vh' }}> Notre algorithme trouve l'aide qu'il vous faut en fonction de vos enjeux !</h5>
                        <Button color="primary" size='lg' style={{ fontSize: 20, fontWeight: 'regular', width: '30vh', marginTop: '7vh' }} onClick={() => callSearchPage()} >Rechercher</Button>
                    </Col>

                    <Col sm="12" md="6" lg="6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                        <img src='../images/sofia.png' style={{ height: 80, width: 80, marginTop: '15px' }} />
                        <div style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Alata', borderRadius: '50px', marginTop: '10px', padding: '0 5px  0 5px', backgroundColor: '#F3D849', color: '#ffffff' }}>CEO</div>
                        <img src='../images/illustration-450x364.png' alt="Photo d'illustration de la landing page" />
                        <div style={{ display: 'flex', width: 550, justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src='../images/eric.png' style={{ height: 80, width: 80 }} />
                                <div style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Alata', borderRadius: '50px', marginTop: '10px', padding: '0 5px  0 5px', backgroundColor: '#E0E5E9', color: "#191718" }}>Assistant de direction</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src='../images/jean.png' style={{ height: 80, width: 80 }} />
                                <div style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Alata', borderRadius: '50px', margin: 'auto', padding: '0 5px  0 5px', marginTop: '10px', backgroundColor: '#191718', color: '#ffffff' }} >Chef d'entreprise</div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* <Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                    <Col sm="12" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '60vh', borderRadius: '5px', border: '1px solid #E0E5E9', textAlign: 'center' }}>En utilisant EDIA vous acceptez notre politique de cookies      X </div>
                    </Col>
                </Row> */}


                {/* MEDIA  */}
                <Row style={{ margin: '60px 0 60px 0' }}>
                    <Col sm="12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>
                        <div style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Spartan', color: "#191718" }}>Fonctionnalités</div>
                        <div style={{ fontSize: 20, fontWeight: 'regular', fontFamily: 'Inter', color: "#191718" }}>Vos recherches d’aides publiques deviennent</div>
                    </Col>
                </Row>

                <Row>
                    <Media style={{ display: 'flex', alignItems: 'center', width: '153vh', margin: "3vh", marginLeft: '10vh' }}>
                        <Media object src="../images/yellow.png" alt="Icone avec une cible" style={{ marginRight: '5vh' }} />
                        <Media body>
                            <Media heading style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718", textAlign: 'left', }}>Intelligentes</Media>
                            <Media style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'left' }}>En quelques clics</Media>
                            <Media style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'justify', width: '130vh' }}>Nous vous posons quelques questions et notre algorithme s'occupe du reste pour trouver les aides qui correspondent au mieux aux besoins de votre entreprise.</Media>
                        </Media>
                    </Media>

                    <Media style={{ display: 'flex', alignItems: 'center', width: '153vh', margin: "3vh", marginLeft: '50vh', flexDirection: 'row-reverse' }}>
                        <Media object src="../images/blue.png" alt="Icone avec un robot" style={{ marginRight: '10vh', marginLeft: '5vh' }} />
                        <Media body>
                            <Media heading style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718", textAlign: 'right' }}>Exhaustives</Media>
                            <Media style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'right' }}>La puissance du big data</Media>
                            <Media style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'right', width: '130vh' }}>Notre algorithme se charge de parcourir l'ensemble des dispositifs d'aides en France et en Europe. Vous êtes assuré(e) de ne manquer aucune aide publique pour développer votre entreprise.</Media>
                        </Media>
                    </Media>

                    <Media style={{ display: 'flex', alignItems: 'center', width: '153vh', margin: "3vh", marginLeft: '10vh' }}>
                        <Media object src="../images/grey.png" alt="Icone avec un avion en papier" style={{ marginRight: '5vh' }} />
                        <Media body>
                            <Media heading style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718", textAlign: 'left' }}>Automatisées</Media>
                            <Media style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'left'}}>C'est un match !</Media>
                            <Media style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'justify', width: '130vh' }}>Plus besoin de vérifier de manière régulière les nouveaux dispositifs d'aides. Une notification vous est envoyée quand une aide correspond à vos critères.</Media>
                        </Media>
                    </Media>


                </Row>

                {/* CARTES CONTACT */}
                <Row style={{ margin: '60px 0 60px 0' }}>
                    <Col sm="12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>
                        <div style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718", }}>Nos clients</div>
                        <div style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", }}>Ils et elles nous font confiance</div>
                    </Col>
                </Row>

                <Row >
                    <Col sm="12" md="6" lg="4">
                        <Card style={{ display: 'flex', alignItems: 'center', border: '1px solid white', marginLeft: '3vh' }}>
                            <CardImg top style={{ margin: '20px', width: "50%", justifyContent: 'center' }} src="../images/eric.png" alt="Photo d'Eric Schmidt" />
                            <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <CardTitle tag="h1" style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718" }}>Eric Schmidt</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>Assistant de direction - Bol'Dair</CardSubtitle>
                                <CardText style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'center', marginTop: '7vh' }}>Avant Edia, je passais un temps fou à rechercher les différents dispositifs d'aides publiques, et à rassembler les données pour en informer mon patron. Aujourd'hui je les retrouve en un coup d'oeil dans mon dashboard.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Card style={{ display: 'flex', alignItems: 'center', border: '1px solid white', marginLeft: '3vh' }}>
                            <CardImg top style={{ margin: '20px', width: "50%", justifyContent: 'center' }} src="../images/sofia.png" alt="Photo de Sofia Cantre" />
                            <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <CardTitle tag="h1" style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718" }}>Sofia Cantre</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>CEO - Getsy</CardSubtitle>
                                <CardText style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", textAlign: 'center', marginTop: '7vh' }}>Quand j'ai créé ma startup j'ai vite été perdue pour naviguer entre les différents dispositifs d'aides publiques auxquelles mon entreprise pouvait prétendre. Aujourd'hui avec Edia, aucune opportunité ne me passe sous le nez. Je viens de bénéficier d'une aide européenne.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Card style={{ display: 'flex', alignItems: 'center', border: '1px solid white', marginLeft: '3vh' }}>
                            <CardImg top style={{ margin: '20px', width: "50%", justifyContent: 'center' }} src="../images/jean.png" alt="Photo de Jean de Nevers" />
                            <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <CardTitle tag="h1" style={{ fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718" }}>Jean de Nevers</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>Chef d'entreprise - Palaison Transports</CardSubtitle>
                                <CardText style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', textAlign: 'center', color: "#191718", marginTop: '7vh' }}>Il y a un an je cherchais à conquérir de nouveaux marchés pour développer mon entreprise. Grâce à Edia j'ai entendu parler d'aides à l'embauche de la région Ile de France. Mon équipe commerciale a bien grandi depuis.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row fluid={true} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Col sm="12" md="6" lg="6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '30vh', width: "100%" }}>
                        <div style={{fontSize: 50, fontFamily: 'Spartan', fontWeight: 'bold', color: "#191718"}}>Trouvez l'aide publique qu'il vous faut !</div>
                        <div style={{fontSize: 20, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718", marginTop: '5vh', marginBottom: "2vh" }}>En moins de 2 minutes 😉</div>
                        <Button color="primary" size='lg' style={{ fontSize: 20, fontWeight: 'regular', width: '30vh', marginTop: '7vh', marginBottom: '30vh' }} onClick={() => callSearchPage()}>Rechercher</Button>
                    </Col>
                </Row>


                {/* FOOTER */}
                <Row style={{ display: 'flex', backgroundColor: "#E0E5E9" }}>
                    <Col>
                        <img src='../images/petit-logo-150x94-transparent.png' alt="Logo" style={{marginTop: '2vh'  }}/>
                    </Col>

                    <Col style={{ display: 'flex', flexDirection: 'column', width:"60vh", marginTop: '3vh'  }}>

                        <div style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold' }}>A propos</div>
                        <div style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#0A95D0"}}>Notre mission</div>
                        <div style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718"}}>We're hiring !</div>
                    </Col>

                    <Col style= {{marginTop: '1vh'}}>
                        <div style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold', marginTop: '10px'  }}>Ressources</div>
                        <div style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>Blog</div>
                    </Col>

                    <Col style= {{marginTop: '1vh'}}>
                        <div style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold', marginTop: '10px'  }}>Nous contacter</div>
                        <div style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>40 Rue des Boulangers</div>
                        <div style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>75005</div>
                        <br></br>
                        <div style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'regular', color: "#191718" }}>06 18 44 98 45</div>
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


function mapDispatchToProps(dispatch) {
    return {
        initSearchOptions: function (tb) {
            dispatch({ type: 'initSearchOptions', searchOptions: tb })
        },

        updateIndexOptions: function (i) {
            dispatch({ type: 'updateIndexOptions', indexOptions: i })
        },

        updateNumberOfAids: function (n) {
            dispatch({ type: 'updateNumberOfAids', numberOfAids: n })
        },

        reinitialiseAids: function() {
            dispatch({type: 'initAids'})
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Landingpage)

