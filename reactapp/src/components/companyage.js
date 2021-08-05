import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {Input, Typography, Card, Col, Row } from 'antd'; 

import SearchAids from './searchaids';
import CountAids from './countaids';
import SpinSearch from './spinsearch';



function CompanyAge (props) {
  
    const [aidCompanyAge, setAidCompanyAge] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
    const [iSelected, setISelected] = useState(-1)
    const [isSpinning,setIsSpinning] = useState(false); 

    const { Search } = Input;
    const { Text } = Typography;
        
   

    useEffect(() => {
      
        var dataCompanyAge =['- de 3 ans','+ de 3 ans'];
        setAidCompanyAge(dataCompanyAge);
        setNumberOfAids(props.numberOfAids);
         
      },[])   
    
    const runSearch = async (i) => {

          setIsSpinning(true); // Affichage Spin de recherche
          setISelected(i); // pour gérer le marquage du projet sélectionné :
      
      // Appel recherche :
          let parameters = [...props.searchOptions]
          parameters[props.indexOptions].valeur = aidCompanyAge[i]
          const aids = await SearchAids(parameters);
      // Mise à jour du critère dans le store :
          props.updateSearchOptions(props.indexOptions,aidCompanyAge[i]);
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

    const dataItem = aidCompanyAge.map ((companyage,i)=>( 
    {i: i, name: companyage, colorText : colorText, colorBg: colorBg} 
    ));

    if (iSelected>=0) {  console.log('iSelected ',iSelected)
      dataItem[iSelected].colorText = colorTextSelected
      dataItem[iSelected].colorBg=colorBgSelected   
    }
          
           
return (     
  <div>
    <CountAids numberOfAids={numberOfAids}/>
    <SpinSearch isSpinning={isSpinning}/>
                
    <Row gutter={16} style={{alignItems:'center', width: '60%', margin: 'auto', marginTop:'20vh'}}>
      {dataItem.map((item,i) => (
              
               <Card bordered={false} 
                 onClick={() => runSearch(i)}
                 className="mouseHoverChange"
                 style={{    
                      width: '20vw',
                      margin: '10vh',
                      margin: 'auto',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      borderRadius: '10px',
                      fontSize: '18px',
                      border:'1px solid #E0E5E9',
                      color: item.colorText,
                      backgroundColor: item.colorBg, 
                       }}>
                 {item.name}
               </Card>
                   
        
      ))}
    </Row>  
  </div>)
        
        
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
  )(CompanyAge)
        
        
