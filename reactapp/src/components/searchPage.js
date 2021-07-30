import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row  } from 'antd'; 
import Navigation from './navigation';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom';

// composant de test :
import TestEngine from './testengine';

// Import des composants pour les critères de recherche :
import Types from './types';
import Domains from './domains';
import Projects from './projects';
import ActivitySector from './activitysector';
import Territories from './territories';
import NumberOfWorker from './numberofworker';
import CompanyAge from './companyage';
import Profiles from './profiles'; 



import {connect} from 'react-redux';
import 'antd/dist/antd.css';


function SearchPage (props) {

    const { Header, Footer, Sider, Content } = Layout;
    const [indexOptions, setIndexOptions] = useState(0);
    const [onResultPage, setOnResultPage] = useState(false)
        
    useEffect(() => {
    

      },[])   


    // Appel composant suivant pour autre cirtère :
    const callNext= () => {
      props.updateIndexOptions(indexOptions+1);
      setIndexOptions(indexOptions+1);
    }

    
// Si on n'est pas sur la dernière page : 
    let buttonContinuer ='';
    if (indexOptions < (props.searchOptions.length - 1)) {
      buttonContinuer = 
              <Button color="primary" size='md'
                          onClick={() => callNext()}
                          style={{backgroundColor: '#0A62D0',
                                  borderRadius:'10px',
                                  height: "60px",
                                  fontSize: '24px',
                                  color: 'white',
                                  }}>
                    Continuer
                    <RightOutlined />   
                </Button>
    } 

    const callResultPage = ()=> {
      setOnResultPage(true);
}

if (onResultPage) {
  return <Redirect to='resultPage'/>
}

    return ( 

      <div>
        <Layout>
          <Navigation/>
          
            <Content style={{ 
                              backgroundColor: '#E0E5E9',
                              height: '490px',
                              marginLeft: '15px',
                              marginRight: '15px' 
                }}>
                  <p className='Question'>{props.searchOptions[indexOptions].question}</p>
                   {props.searchOptions[indexOptions].composant}
              
              
             
            </Content>
          
        
        </Layout>
        <Col>

        <Col xs={{ span: 2, offset: 5 }} md={{ span: 9, offset: 11 }} style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:'20px'
        }} >
                      {buttonContinuer}
                    
                      <Button color="primary" size='lg' onClick={() => callResultPage()}
                                              style={{backgroundColor: '#0A62D0',
                                                      borderRadius:'10px',
                                                      height: "60px",
                                                      fontSize: '24px',
                                                      color: 'white',
                                                      
                                                      
                                                  
                                                      }}>
                      Voir les aides
                      </Button>   
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
      dispatch({type: 'updateNumberOfAids', numberOfAids: n})}   
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

