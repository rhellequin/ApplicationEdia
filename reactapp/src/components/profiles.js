import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Input, Typography, Card, Col, Row } from 'antd'; 
import 'antd/dist/antd.css';

import SearchAids from './searchaids';
import CountAids from './countaids';
import SpinSearch from './spinsearch';

/*
    Composant pour tester la communication avec le back 
    ===================================================
*/
const {Meta} = Card;

function Profiles (props) {

    const [aidProfiles, setAidProfiles] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
    const [iSelected, setISelected] = useState(-1);
    const [isSpinning,setIsSpinning] = useState(false);
 

    useEffect(() => {
        const findProfiles = async() => {
            const data = await fetch(`/profiles`, {
                method: 'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
            })
            const body = await data.json()
            if (body.result) {
                setAidProfiles(body.profiles);
            }
        }
        setNumberOfAids(props.numberOfAids);
        findProfiles()    
      },[])

  const runSearch = async (i) => {

    setIsSpinning(true); // Affichage Spin de recherche
    setISelected(i); // pour gérer le marquage du projet sélectionné :

    // Appel recherche :
        let parameters = [...props.searchOptions]
        parameters[props.indexOptions].valeur = aidProfiles[i]._id
        const aids = await SearchAids(parameters);
    // Mise à jour du critère dans le store :
        props.updateSearchOptions(props.indexOptions,aidProfiles[i]._id);
    // Store des aids trouvées :
        props.updateAids(aids);
    // Store du compteur d'aides :         
        const n = aids.length;
        props.updateNumberOfAids(n);
        setNumberOfAids(n);
        setIsSpinning(false); 
  }
    
   // Gestion du marquage projet :

  let colorTextSelected = "black"
  let colorBgSelected = "#F3D849"
  let colorText = 'white'
  let colorBg =  '#0A62D0'


  const dataItem = aidProfiles.map ((profile,i)=>( 
    {i: i, name: profile.profileName, colorText : colorText, colorBg: colorBg} 
  ));


  if (iSelected>=0) {  console.log('iSelected ',iSelected)
    dataItem[iSelected].colorText = colorTextSelected
    dataItem[iSelected].colorBg=colorBgSelected   
  }
    



 
  return ( 
        

  <div className="site-card-wrapper">
    
    <CountAids numberOfAids={numberOfAids}/>
    <SpinSearch isSpinning={isSpinning}/>            
    <Row gutter={16}>
      {dataItem.map((item,i) => (               
                    <Col span={6} key={i}>
                      <Card bordered={false} 
                        onClick={() => runSearch(i)}
                        style={{ 
                          marginRight: '8px',
                          marginLeft: '8px',
                          marginTop: '8px',
                          marginBottom: '8px',
                          textAlign: 'center',
                          fontFamily: 'Alata',
                          borderRadius: '10px',
                          fontSize: '16px',
                          color: item.colorText,
                          backgroundColor: item.colorBg, 
                          }}>
                          {item.name}
                      </Card>
                    </Col>
              ))}
       </Row>   
  </div>   
)}

function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids  }
 }

function mapDispatchToProps(dispatch){
  return {
    updateSearchOptions: function(i,val) {
      dispatch({type: 'updateSearchOptions', index: i, valeur: val})},
      
    updateIndexOptions: function(i) {
      dispatch({type: 'updateIndexOptions', indexOptions: i})},
      
    updateNumberOfAids: function(n) {
      dispatch({type: 'updateNumberOfAids', numberOfAids: n})},
    
    updateAids: function(aids) {
      dispatch({type: 'updateAids', aids: aids})}

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles)


