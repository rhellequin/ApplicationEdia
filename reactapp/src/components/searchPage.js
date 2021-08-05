import React, {useState, useEffect } from 'react';
import {Layout, Typography, Button, Col, Text } from 'antd'; 
import {connect} from 'react-redux';
import { RightOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';

import Navigation from './navigation';
import FilAriane from './filariane';




function SearchPage (props) {

    const { Content } = Layout;
    const { Text, Link } = Typography;


    const [indexOptions, setIndexOptions] = useState(0);
    const [onResultPage, setOnResultPage] = useState(false)
        
    useEffect(() => {
    

      },[])   


// Bouton Continuer Si au moins un choix réalisé et si on n'est pas sur la dernière page : 
    let buttonContinuer ='';
    if (indexOptions < (props.searchOptions.length - 1) && props.searchOptions[0].valeur != null) {
      buttonContinuer = 
              <Button color="primary" size='md'
                          onClick={() => callNext()}
                          style={{backgroundColor: '#0A62D0',
                                  borderRadius:'10px',
                                  height: "50px",
                                  width: '30vh',
                                  fontSize: '20px',
                                  color: 'white',
                                  fontWeight: 'regular',
                                  marginBottom: '3vh',
                                  marginTop: '10vh',
                                  marginLeft: '-25vh'
                                  }}>
                    Continuer
              </Button>
    } 

// Bouton : Voir les aides si >0 et <200 aides :
    let buttonVoirAides ='';
    if (props.numberOfAids < 200  && props.numberOfAids > 0 ) {
      buttonVoirAides = 
              <Button color="primary" size='lg' 
                          onClick={() => callResultPage()}
                          style={{backgroundColor: '#ffffff',
                                  borderRadius:'10px',
                                  border: '1px solid #E0E5E9',
                                  height: "50px",
                                  width: '30vh',
                                  fontSize: '20px',
                                  color: '#191718',
                                  fontWeight: 'regular',
                                  marginBottom: '3vh',
                                  marginTop: '10vh',
                                  marginRight: '34vh'
                                }}>
                                    
                      Voir les aides
              </Button>   
    }





// Appel des résultats de la recherche, Voir les Aides :
  const callResultPage = async ()=> {
    const filAriane = await FilAriane(props.searchOptions);
    props.updateFilAriane(filAriane);
    
    setOnResultPage(true);
}

// Appel composant suivant pour autre cirtère :
  const callNext= () => {
    props.updateIndexOptions(indexOptions+1);
    setIndexOptions(indexOptions+1);
}



 

// Redirect : 

const history = useHistory();




if (onResultPage) {
  return <Redirect to='resultPage'/>
}



return ( 
  <div>
    <Layout  style={{backgroundColor: 'white'}}>
      <Navigation/>      
      <Content style={{ 
                        
                        height: '60vh',
                        marginLeft: '15px',
                        marginRight: '15px' 
          }}>
          <p className='Question'>{props.searchOptions[indexOptions].question} </p>
          {props.searchOptions[indexOptions].composant}
      </Content>        
    </Layout>
    <Col>
      <Col xs={{ span: 2, offset: 5 }} md={{ span: 9, offset: 11 }} style={{
                                                                        display:'flex',
                                                                        flexDirection:'row',
                                                                        justifyContent:'space-between',
                                                                        marginTop:'10px'}} >
            {buttonContinuer}
            {buttonVoirAides}                  
        </Col>
      </Col>          
  </div>
);
        
}


function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids  }
 }

function mapDispatchToProps(dispatch){
  return {
    updateSearchOptions: function(tb) {
      dispatch({type: 'updateSearchOptions', searchOptions: tb})},
      
    updateIndexOptions: function(i) {
      dispatch({type: 'updateIndexOptions', indexOptions: i})},
      
    updateNumberOfAids: function(n) {
      dispatch({type: 'updateNumberOfAids', numberOfAids: n})},
    
    updateFilAriane: function(f) {
        dispatch({type: 'updateFilAriane', filAriane: f})}   
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

