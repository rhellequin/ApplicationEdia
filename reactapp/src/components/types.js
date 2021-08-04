import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Input, Typography, Card, Col, Row} from 'antd'; 
import 'antd/dist/antd.css';

import SearchAids from './searchaids'
import CountAids from './countaids'
import SpinSearch from './spinsearch'



/*
    Composant pour tester la communication avec le back 
    ===================================================
*/
const {Meta} = Card;

function Types (props) {

  const [aidTypes, setAidTypes] = useState([]);
  const [numberOfAids, setNumberOfAids] = useState(0);
  const [iSelected, setISelected] = useState(-1)
  const [isSpinning,setIsSpinning] = useState(true);
  

  const { Search } = Input;
  const { Text } = Typography;

  useEffect(() => {

    const findTypes = async() => {
        const data = await fetch(`/types`, {
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
        })
        const body = await data.json()
        if (body.result) {
            setAidTypes(body.types);
        }
    }

    const countAllAids = async() => {
      const data = await fetch(`countallaids`, {
          method: 'GET',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
      })
      const body = await data.json()
      if (body.result) {
          setNumberOfAids(body.countAllAids)
      }
    }

    setIsSpinning(true);
    findTypes();
    countAllAids();
    setIsSpinning(false);
        
  },[])

  const runSearch = async (i) => {
      
    setIsSpinning(true);
    setISelected(i); // pour gérer le marquage du projet sélectionné :

// Appel recherche :
    let parameters = [...props.searchOptions]
    parameters[props.indexOptions].valeur = aidTypes[i]._id
    const aids = await SearchAids(parameters);
// Mise à jour du critère dans le store :
    props.updateSearchOptions(props.indexOptions,aidTypes[i]._id);
// Store des aids trouvées :
    props.updateAids(aids);
// Store du compteur d'aides :         
    const n = aids.length;
    props.updateNumberOfAids(n);
    setNumberOfAids(n);
    setIsSpinning(false);

        
  }
    
   // Gestion du marquage projet :

   
  let colorTextSelected = "#ffffff"
  let colorBgSelected = "#285fda"
  let colorText = '#191718'
  let colorBg =  '#ffffff'


  const dataItem = aidTypes.map ((type,i)=>( 
  {i: i, name: type.typeName, colorText : colorText, colorBg: colorBg} 
  ));


  if (iSelected>=0) {  
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
                          marginRight: '15px',
                          marginLeft: '15px',
                          marginTop: '15px',
                          marginBottom: '15px',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          borderRadius: '5px',
                          border:'1px solid #E0E5E9',
                          color: item.colorText,
                          backgroundColor: item.colorBg }}>
                              {item.name}
                      </Card>
                    </Col>
              ))}
       </Row>   
  </div>   
)

}



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
)(Types)


