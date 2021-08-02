import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import{Redirect} from "react-router-dom";

import {Col, Row,Card} from 'antd'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import 'antd/dist/antd.css';
import './visuels/resultPage.css';

import Navigation from './navigation';
import Bouton from './Bouton';
import CountAids from './countaids'
import FilAriane from './filariane'

const { Header, Content, Footer, Sider } = Layout;





function ResultPage (props) {

  const [ResultList, setResultList] = useState([])
  const [addingAid, setAddingAid] = useState (false)
  const [addList, setAddList] = useState([])
  const [isLogin,setIsLogin]= useState(true)
  const [numberOfAids, setNumberOfAids] = useState(0);
  const [filAr, setFilAr] = useState([])
  const [ids, setIds] = useState({})
  const [rollDiceLogo, setRollDiceLogo] = useState('')
  const [rollDiceMontant, setRollDiceMontant] = useState('')
  const [rollDiceDiff, setRollDiceDiff] = useState('')
  const [rollDiceDelai, setRollDiceDelai] = useState('')

  var importResult = props.aids.map((aid, i) => ({
  name: aid.aidName, financeur:aid.aidFunders[0].funderName, montant:aid.aidMountant, niveauAide: aid.aidLevel.levelName, logo:'../images/pinguin.png', diff:'facile',delai: '6 mois',

}));

var idlist ={id1:"", id2:"", id3:"", id4:"", id5:""}

var tirageLogo = (Math.floor( Math.random() * 10 ) +1);
var tirageMontant = (Math.floor( Math.random() * 10 ) +1);
var tirageDiff = (Math.floor( Math.random() * 10 ) +1);
var tirageDelai = (Math.floor( Math.random() * 10 ) +1);

var affichageMontant=rollDiceMontant*1000

var affichageDiff=''
        if(rollDiceDiff<4){affichageDiff='facile'}
        else if(rollDiceDiff>=4 || rollDiceDiff <8){affichageDiff='moyenne'}
        else if(rollDiceDiff>=8){affichageDiff='difficile'}

var affichageDelai=''
        if(rollDiceDelai<4){affichageDelai='- de 1 mois'}
        else if(rollDiceDelai>=4 || rollDiceDelai <8){affichageDelai='entre 1 et 3 mois'}
        else if(rollDiceDelai>=8){affichageDelai='entre 3 et 6 mois'}

var affichageLogo=''
        if(rollDiceLogo==1){affichageLogo='../images/logo1.jpg'}
        else if(rollDiceLogo==2){affichageLogo='../images/logo2.jpg'}
        else if(rollDiceLogo==3){affichageLogo='../images/logo3.jpg'}
        else if(rollDiceLogo==4){affichageLogo='../images/logo4.jpg'}
        else if(rollDiceLogo==5){affichageLogo='../images/logo5.jpg'}
        else if(rollDiceLogo==6){affichageLogo='../images/logo6.jpg'}
        else if(rollDiceLogo==7){affichageLogo='../images/logo7.jpg'}
        else if(rollDiceLogo==8){affichageLogo='../images/logo8.jpg'}
        else if(rollDiceLogo==9){affichageLogo='../images/logo9.jpg'}
        else if(rollDiceLogo==10){affichageLogo='../images/logo10.jpg'}

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
          setRollDiceLogo(tirageLogo)
          setRollDiceMontant(tirageMontant)
          setRollDiceDiff(tirageDiff)
          setRollDiceDelai(tirageDelai)   
        }
        resultat()

      }, [])
      
     
      console.log('myID', ids)
      // Fonctions de tri
      var TrierParMontant = async () => {
        
                  importResult.sort(
                      function compareMountant( a, b ) {
                          if ( a.montant < b.montant ){return -1;}
                          if ( a.montant > b.montant ){return 1;}
                          return 0;}
                  );
                  
                  console.log('importResult', importResult);
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
                  console.log('importResult', importResult);
                  setResultList(importResult)}

      var TrierParNiveauAide = async () => {
                  importResult.sort(
                      function compareNiveau( a, b ) {
                          if ( a.niveauAide < b.niveauAide ){return -1;}
                          if ( a.niveauAide > b.niveauAide ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"inactive", id3:"active", id4:"inactive", id5:"inactive"})
                  console.log('importResult', importResult);
                  setResultList(importResult)}

      var TrierParDifficulte = async () => {
                  importResult.sort(
                      function compareDiff( a, b ) {
                          if ( a.diff < b.diff ){return -1;}
                          if ( a.diff > b.diff ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"inactive", id3:"inactive", id4:"active", id5:"inactive"})
                  console.log('importResult', importResult);
                  setResultList(importResult)}

      var TrierParDelai= async () => {
                  importResult.sort(
                      function compareDelai( a, b ) {
                          if ( a.delai < b.delai ){return -1;}
                          if ( a.delai > b.delai ){return 1;}
                          return 0;}
                  );
                  setIds({id1:"inactive", id2:"inactive", id3:"inactive", id4:"inactive", id5:"active"})
                  console.log('importResult', importResult);
                  setResultList(importResult)}
  


  //Gestion des favoris

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
                
    <Col xs={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} key={i}>
     
        <Card  className='CardAid'>
                
                <Row  className='CardRang1'>
                      {/* <img src={aide.logo} alt='' height='80px' /> */}
                      <img src={affichageLogo} alt='' height='80px' />
                      <p><FontAwesomeIcon icon={faStar}
                          style={colorStar}
                          onClick={()=>addUserAid(aide,aide.id)}/>
                      </p>
                </Row>
      
                <Row className='CardAidName'>
                      <div style={{marginBottom:'10px'}}>{aide.name}</div>
                </Row>
                
                <Row className='CardAidMontant'>
                      <div>{affichageMontant}€</div>
                </Row>

                <Row className='CardAidInfo' >
                      <div className='CardAidInfoSup'>
                          <p>{aide.financeur}</p>
                          <p>{aide.niveauAide}</p>
                      </div>
              
                      <div className='CardAidInfoInf' >
                          <p>Difficulté d'obtention: {affichageDiff}</p>
                          <p>Délai d'obtention:{affichageDelai}</p>
                      </div>
                </Row>
              
                <Row className='CardAidbouton'>          
                      <Bouton />
                </Row>
                  
        </Card>

    </Col>
    )
          })


if(isLogin==true){

  return ( 

        
<div>

  <Navigation/>

  <CountAids numberOfAids={numberOfAids}/>
  <Col md={{ span: 24 }} className='Ariane' >
      
      <div className='CritAid'><img src='../images/1.png' alt='' /><div className='CritQuestion'>Type d'aide: </div>Exonération de charges sociales </div>
      <div className='CritAid'><img src='../images/2.png' alt='' /><div className='CritQuestion'>Secteur d'activité: </div>Economie</div>
      <div className='CritAid'><img src='../images/3.png' alt='' /><div className='CritQuestion'>Enjeux: </div>Connaître les exonérations fiscales</div>
      <div className='CritAid'><img src='../images/4.png' alt='' /><div className='CritQuestion'>Département: </div>Loire-Atlantique: </div>
      <div className='CritAid'><img src='../images/5.png' alt='' /><div className='CritQuestion'>Profil de l'entreprise: </div>Autres services, professions libérales</div>
      <div className='CritAid'><img src='../images/6.png' alt='' /><div className='CritQuestion'>Effectifs: </div>+ de 250</div>
      <div className='CritAid'><img src='../images/7.png' alt='' /><div className='CritQuestion'>Age de l'entreprise: </div>moins de 3 ans
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