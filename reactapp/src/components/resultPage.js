import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import{Redirect} from "react-router-dom";
import Modal from 'react-modal'

import {Col, Row,Card} from 'antd'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import 'antd/dist/antd.css';
import './visuels/resultPage.css';
import './visuels/Modal.css';






import Navigation from './navigation';
import Bouton from './Bouton';
import CountAids from './countaids'
import FilAriane from './filariane'

Modal.setAppElement('#root')

function ResultPage (props) {

  const [ResultList, setResultList] = useState([])
  const [addingAid, setAddingAid] = useState (false)
  const [addList, setAddList] = useState([])
  const [isLogin,setIsLogin]= useState(true)
  const [numberOfAids, setNumberOfAids] = useState(0);
  const [filAr, setFilAr] = useState([])
  const [ids, setIds] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState (false)
  const [blurEffect, setBlurEffect] = useState('blurEffectOff')
 

 
  

  var importResult = props.aids.map((aid, i) => ({
  id: aid._id, name: aid.aidName, financeur:aid.aidFunders[0].funderName, montant:aid.aidAmount, niveauAide: aid.aidLevel.levelName, logo: aid.aidLogo, diff: aid.aidDiff, delai: aid.aidDelai

}));




var idlist ={id1:"", id2:"", id3:"", id4:"", id5:""}




console.log('blurEffect',blurEffect)


       

      useEffect(() => {
          var resultat = async () => {
                  importResult.sort(function compareMountant( a, b ) {
                  if ( a.montant < b.montant ){return -1;}
                  if ( a.montant > b.montant ){return 1;}
                  return 0;});
          console.log('useffect', importResult);
          setResultList(importResult);
          setNumberOfAids(props.numberOfAids);

          const filAriane = await FilAriane(props.searchOptions);
          setFilAr(filAriane);
          setIds(idlist)
          setBlurEffect('blurEffectOff')
          
          
          
         
         
        }
        resultat()

      }, [])
      
var ActiverBlur = async () => {
        setBlurEffect('blurEffectOn');
        setModalIsOpen(true)}
    
var DesactiverBlur = async () => {
            setBlurEffect('blurEffectOff');
            setModalIsOpen(false)}
       
        
      // Fonctions de tri
      var TrierParMontant = async () => {
        
                  importResult.sort(
                      function compareMountant( a, b ) {
                          if ( a.montant < b.montant ){return -1;}
                          if ( a.montant > b.montant ){return 1;}
                          return 0;}
                  );
                  
                  setIds({id1:"active", id2:"inactive", id3:"inactive", id4:"inactive", id5:"inactive"})
                  
                  setResultList(importResult)};

      var TrierParFinanceur = async () => {
                  importResult.sort(
                      function compareFinanceur( a, b ) {
                          if ( a.financeur < b.financeur ){return -1;}
                          if ( a.financeur > b.financeur ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"active", id3:"inactive", id4:"inactive", id5:"inactive"})
                  setResultList(importResult)}

      var TrierParNiveauAide = async () => {
                  importResult.sort(
                      function compareNiveau( a, b ) {
                          if ( a.niveauAide < b.niveauAide ){return -1;}
                          if ( a.niveauAide > b.niveauAide ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"inactive", id3:"active", id4:"inactive", id5:"inactive"})
                  setResultList(importResult)}

      var TrierParDifficulte = async () => {
                  importResult.sort(
                      function compareDiff( a, b ) {
                          if ( a.diff < b.diff ){return -1;}
                          if ( a.diff > b.diff ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"inactive", id3:"inactive", id4:"active", id5:"inactive"})
                  setResultList(importResult)}

      var TrierParDelai= async () => {
                  importResult.sort(
                      function compareDelai( a, b ) {
                          if ( a.delai < b.delai ){return -1;}
                          if ( a.delai > b.delai ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"inactive", id3:"inactive", id4:"inactive", id5:"active"})
                  setResultList(importResult)}
  




      var addUserAid= async(aide,id)=>{

            var copyList=[...ResultList]
                copyList=copyList.map((aide,i)=>{
                    if(aide.favorite==undefined ){
                          if(aide.id==id){
                          return {...aide,favorite:true}}
                          else{
                          return {...aide,favorite:false}}
                          }
                    else{
                          if(aide.id==id){
                          return {...aide,favorite: !aide.favorite}}
                          else {
                          return {...aide,favorite: aide.favorite}}
                          }
                })
            setResultList(copyList)
            console.log(id,'idqlsdkjlqskd')

            var newFavorite
                if(aide.favorite==undefined || aide.favorite==false){
                      newFavorite=true}
                else if(aide.favorite==true){
                      newFavorite=false}

            console.log(id)
            
            const data = await fetch('/add-favorite', {
                        method: 'POST',
                        headers: {'Content-Type':'application/x-www-form-urlencoded'},
                        body: `id=${id}&token=${props.token}&favorite=${newFavorite}`
                        })  
            const response = await data.json();
    
            console.log(response.result)

            if (response.result==false){
                setIsLogin(false)}
      }

 

            var displayList = ResultList.map((aide,i) => {
                            if(aide.favorite ==true){
                                var colorStar = {color: 'yellow'}} 
                            else {
                                var colorStar = {colResultor:'black'}}

    


return(
                
    <Col xs={{ span: 24, offset: 0 }}  md={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}key={i}>
     
        <Card  className='CardAid' >
                
                <Row  className='CardRang1'>
                      <img src={aide.logo} alt='' height='80px' />
                    
                      <div className='CardAidMontant'>{aide.montant}€</div>
                      <p><FontAwesomeIcon icon={faStar}
                          style={colorStar} size='2x'
                          onClick={()=>addUserAid(aide,aide.id)}/>
                      </p>
                </Row>
      
                <Row className='CardAidName'>
                      <div style={{marginBottom:'10px'}}>{aide.name}</div>
                </Row>
                
                <div className='Hline'></div>

                <Row className='CardAidInfo' >
                      <div className='CardAidInfoSup'>
                      <div className='Criteres'>
                          <div className='ask'>Financeur:</div>
                          <p className='ans'>{aide.financeur}</p>
                          </div>
                        <div className='Criteres'>
                        <div className='ask'>Niveau de l'aide</div>
                        <div className='ans'>{aide.niveauAide}</div>
                          </div>
                      </div>
              
                      <div className='CardAidInfoInf' >
                      <div className='Criteres'>
                      <div className='ask'>Difficulté d'obtention: </div>
                      <div className='ans'>{aide.diff}</div>

                          </div>
                          <div className='Criteres'>    
                          <div className='ask'>Délai d'obtention:</div>
                          <div className='ans'> {aide.delai}</div>
                          </div>
                      </div>
                </Row>
              
                <Row className='CardAidbouton'>          
                <button className='Ensavoirplus' onClick={() =>ActiverBlur()}>En savoir +</button>

                </Row>
                  
        </Card>



    </Col>
    )
          })


if(isLogin==true){

  return ( 

        
<div id={blurEffect}>

  <Navigation/>

  <CountAids numberOfAids={numberOfAids}/>
  <Col md={{ span: 24 }} className='Ariane' >
      
      <div className='CritAid'><div className='CritQuestion'>Type d'aide: </div>Exonération de charges sociales </div>
      <div className='CritAid'><div className='CritQuestion'>/ Secteur d'activité: </div>Economie</div>
      <div className='CritAid'><div className='CritQuestion'>/ Enjeux: </div>Connaître les exonérations fiscales</div>
      <div className='CritAid'><div className='CritQuestion'>/ Département: </div>Loire-Atlantique</div>
      <div className='CritAid'><div className='CritQuestion'>Profil de l'entreprise: </div>Autres services, professions libérales</div>
      <div className='CritAid'><div className='CritQuestion'>Effectifs: </div>+ de 250</div>
      <div className='CritAid'><div className='CritQuestion'>Age de l'entreprise: </div>moins de 3 ans
      </div>

  </Col>

  <div style={{display:'flex', flexDirection: 'row'}}>                                          
      <div className='Sidebar' >
          <h2 style={{marginBottom:'20px', marginTop:'20px'}}>TRIER PAR</h2>                       
              <ul className='SidebarList'>
                  <li id={ids.id1} onClick={() => TrierParMontant()} key="1" className='Row'><img src='../images/euro.png' alt=''id="IconeTri" /><div id="Title">Montant</div></li>
                  <li id={ids.id2} onClick={() => TrierParFinanceur()} key="2" className='Row'><img src='../images/administrateur.png' alt='' id="IconeTri" /><div id="Title">Financeur</div></li>
                  <li id={ids.id3} onClick={() => TrierParNiveauAide()} key="3" className='Row'><img src='../images/geographie.png' alt='' id="IconeTri" /><div id="Title">Niveau de l'aide</div></li>
                  <li id={ids.id4} onClick={() => TrierParDifficulte()} key="4" className='Row'><img src='../images/difficulty.png' alt='' id="IconeTri" /><div id="Title">Difficulté</div></li>
                  <li id={ids.id5} onClick={() => TrierParDelai()} key="5" className='Row'><img src='../images/delais.png' alt='' id="IconeTri" /><div id="Title">Délais d'obtention</div></li>
              </ul>
          </div>
   
        
              <div className='Mapper'>
                  <Row>
                      {displayList}
                  </Row>  
              </div> 
        
  </div> 
  <Modal isOpen={modalIsOpen} onRequestClose={() =>DesactiverBlur()} style={{overlay:{position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'black'
                                    }},
                                    {content:{backgroundColor:'white',overflow: 'auto',position: 'absolute',
                                    left: '20%',
                                    right: '20%',
                                    height:'100%',
                                    width: '60%'
                                    }}}>
                                    <div>
                                    <div className='Divhaut'>
                                    <img className='Divhautgauche'src='../images/pinguin.png'  height='150px' alt='' />
                                    
                                    <div className='Divhautdroite'>
                                        <div>
                                        <h2>Super Aide</h2>
                                        <h4>1000 à  2000 €</h4>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            
                                            
     }}>
         <div>
         <h5 className='Details'>Type d'aide: </h5>
         <p className='Details'>Subvention</p>
         </div>
         <div>
         <h5 className='Details'>Difficulté: </h5>
         <p className='Details'>très faible</p>
         </div>
         <div>
         <h5 className='Details'>Délai d'obtention: </h5>
         <p className='Details'>1 mois</p>
         </div>
        
     </div>
 </div>

</div>







</div>
<div style={{
    display:'flex',
    flexDirection:'row',
    
}}>
    <div className='Colonnegauche'>
    <h5>Organisme financeur</h5>
    <p>Pôle Emplois</p>
    <h5>Stratégie</h5>
    <p>iRecrutement</p>
    <h5>Département</h5>
    <p>Bouches-du-Rhône</p>
    <h5>Lien de l’organisme</h5>
    <p>https://www.bpifrance.fr/nos-solutions/innovation</p>
    </div>
    <div>
    <h3>Bénéficiaires</h3>
    <div className='Hline'></div>
    <p className='Critere'>Publics visés par le dispositif :
TPE, PME(1) et ETI(2) qui recrutent :
en contrat de travail, un jeune de niveau bac+2 minimum, diplômé depuis moins de 2 ans et pour une
mission d’au moins 1 an
en contrat d’apprentissage ou de professionnalisation (pour une  durée de 10 mois minimum), un
jeune déjà diplômé de niveau bac+2 et en cours de formation pour un niveau bac+3 ou plus

(1) Selon la défnition européenne de la PME : entreprise de moins de 250 salariés déclarant soit un CA annuel
inférieur à 50 M€, soit un total de bilan n'excédant pas 43 M€. Elle doit être indépendante, c'est-à-dire ne pas
être détenue à plus de 25 % par une ou plusieurs entités qui ne sont pas des PME.
 
(2) Jusqu'à 5.000 salariés</p>
    <h3>Critères d’éligibilité</h3>
    <div className='Hline'></div>
    <p className='Critere'> Nombre de salariés</p>
    <p className='Critere'><img src='../images/checked.png' alt='' />Chiffre d’affaires</p>
    <p className='Critere'><img src='../images/checked.png'  alt=''/>Pas de licenciement économique dans les 6 derniers mois</p>
    <p className='Critere'><img src='../images/checked.png' alt='' />Entreprises implantées en France enregistrées au registre du Commerce et des Sociétés ou au Répertoire des Métiers</p>
    <p className='Critere'><img src='../images/cancel.png'  alt=''/>À jour des versements fiscaux et sociaux</p>
    <p className='Critere'><img src='../images/cancel.png' alt='' />Situation financière saine</p>
    <p className='Critere'><img src='../images/cancel.png' alt='' />Sous réserve d'un niveau de fonds propres sufisant</p>
    <h3>Modalités</h3>
    <div className='Hline'></div>
    <p className='Critere'>L'aide est octroyée sous forme de subvention variable selon la nature de l'investissement :
Pour les études préalables et les actions complémentaires : la subvention est plafonnée à 50 000 € par
bénéfciaire et par projet. Le taux maximum sera défni en fonction de la taille de l’entreprise et du régime
d’aides. 
Pour les investissements : le taux maximum sera défni en fonction de la taille de l’entreprise et du régime
d’aides. </p>
<div className='Barreboutons'>
                <button className='Bouton2'>TELECHARGER FICHE</button>
                <button className='Bouton2'>PARTAGER FICHE</button>
                <button className='Bouton2'>NOUS CONTACTER </button>
                </div>
    </div>
   
</div>

</Modal>
</div>

);
        
} else { return (<Redirect to='/signin'/>)}       

}

function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids, aids: state.aids, token: state.user.token}}

export default connect(
  mapStateToProps,
  null
 )(ResultPage);