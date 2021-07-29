import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {Input, Typography, Card, Col, Row } from 'antd'; 

import SearchAids from './searchaids'
import CountAids from './countaids'

const {Meta} = Card;

function NumberOfWorker (props) {
  
    const [aidNumberOfWorker, setAidNumberOfWorker] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
    const [iSelected, setISelected] = useState(-1)

    const { Search } = Input;
    const { Text } = Typography;
        
   

    useEffect(() => {
      
        var dataWorker =['micro','-5','-10','-15', '10-49', '50-249', '250 et plus' ];
        setAidNumberOfWorker(dataWorker);
        setNumberOfAids(props.numberOfAids);
         
      },[])   
    
      const runSearch = async (i) => {
      
        console.log('runSearch', i)
        
            setISelected(i); // pour gérer le marquage du projet sélectionné :
        
            // Appel recherche :
                let parameters = [...props.searchOptions]
                parameters[props.indexOptions].valeur = aidNumberOfWorker[i]
                const aids = await SearchAids(parameters);
            // Mise à jour du critère dans le store :
                props.updateSearchOptions(props.indexOptions,aidNumberOfWorker[i]);
            // Store des aids trouvées :
                props.updateAids(aids);
            // Store du compteur d'aides :         
                const n = aids.length;
                props.updateNumberOfAids(n);
                setNumberOfAids(n);
          }
            
           // Gestion du marquage projet :
        
           let colorTextSelected = "White"
           let colorBgSelected = "purple"
           let colorText = 'white'
           let colorBg =  '#0A62D0'
        
        
           const dataItem = aidNumberOfWorker.map ((numberofworker,i)=>( 
            {i: i, name: numberofworker, colorText : colorText, colorBg: colorBg} 
            ));
        
        
            if (iSelected>=0) {  console.log('iSelected ',iSelected)
              dataItem[iSelected].colorText = colorTextSelected
              dataItem[iSelected].colorBg=colorBgSelected   
            }
            
        
            console.log(dataItem)
        
        
        // <h1 class='question' style={{color:'#ff33e0'}}>Déjà {numberOfAids} aides!</h1> 
            return ( 
                
        
        <div className="site-card-wrapper">
            <CountAids numberOfAids={numberOfAids}/>
        
                       
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
                                fontFamily: 'Alata',
                                borderRadius: '10px',
                                fontSize: '18px',
                                color: item.colorText,
                                backgroundColor: item.colorBg, 
        
        
                                }}>
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
        )(NumberOfWorker)
        
        
        