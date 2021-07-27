import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Input, Typography, Space, Button, Icon, Card, Col, Row } from 'antd'; 
import 'antd/dist/antd.css';


/*
    Composant pour tester la communication avec le back 
    ===================================================
*/
const {Meta} = Card;

function Types (props) {

    const [aidTypes, setAidTypes] = useState([]);
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
    
        findTypes()    
      },[])


   



    return ( 
        

<div className="site-card-wrapper">
    <Row gutter={16}>

    {aidTypes.map((type,i) => (
                
                    <Col span={8} key={i}>
                    <Card bordered={false} 
                      
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


