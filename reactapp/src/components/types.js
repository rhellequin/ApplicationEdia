import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Input, Typography, Space, Button, Icon, Card, Col, Row } from 'antd'; 
import 'antd/dist/antd.css';

import SearchAids from './searchaids'

/*
    Composant pour tester la communication avec le back 
    ===================================================
*/
const {Meta} = Card;

function Types (props) {

    const [aidTypes, setAidTypes] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);

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
                console.log("aidtypes", aidTypes)
            }
        }
        setNumberOfAids(props.numberOfAids);
        findTypes()    
      },[])

      const runSearch = async (i) => {
        


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
        }
    
   



    return ( 
        

<div className="site-card-wrapper">
    <h1 class='question' style={{color:'#ff33e0'}}>Déjà {numberOfAids} aides!</h1> 
               
    <Row gutter={16}>

    {aidTypes.map((type,i) => (
                
                    <Col span={8} key={i}>
                    <Card bordered={false} 
                      onClick={() => runSearch(i)}
                      style={{ 
                        backgroundColor: '#0A62D0', 
                        marginRight: '15px',
                        marginLeft: '15px',
                        marginTop: '15px',
                        marginBottom: '15px',
                        textAlign: 'center',
                        fontFamily: 'Alata',
                        borderRadius: '10px',
                        fontSize: '18px',
                        color: 'white'
                        
                        }}>
                            {type.typeName}
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


