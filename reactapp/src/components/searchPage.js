import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row  } from 'antd'; 
import Nav from './nav';
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
    if (indexOptions < 6) {
      buttonContinuer = 
              <Button color="primary" size='md'
                          onClick={() => callNext()}
                          style={{backgroundColor: '#0A62D0',
                                  borderRadius:'10px',
                                  fontSize: '32px',
                                  color: 'white',
                                  height: "60px"
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
          <Nav/>
        
          <Col md={{ span: 8, offset: 14 }}>
            <div style={{
              backgroundColor:'#E0E5E9',
              width:'600px',
              height:'73px',
              textAlign: 'center',
              fontFamily: 'Alata',
              fontSize: '30px',
              borderRadius:'10px',
              marginLeft:'5px'
              }}>
              534 aides disponibles
            </div>
          </Col>


          <Row>
            <Content
              style={{ 
                backgroundColor: '#E0E5E9',
                height: '490px',
                marginLeft: '15px',
                marginRight: '15px' 
                }}>
              <h1 class='question'>{props.searchOptions[indexOptions].question}</h1>
              {props.searchOptions[indexOptions].composant}
            </Content>
          </Row>

          <Row>           
            <Col xs={{ span: 1, offset: 10 }} md={{ span: 6, offset: 10 }}>           
                      {buttonContinuer}
            </Col>  

            <Col xs={{ span: 5, offset: 3 }} md={{ span: 5, offset: 3}}>
              <Button color="primary" size='lg' onClick={() => callResultPage()}
                                              style={{backgroundColor: '#0A62D0',
                                                      borderRadius:'10px',
                                                      height: "60px",
                                                      fontSize: '16px',
                                                      color: 'white',
                                                  
                                                      }}>
                      Voir les aides
              </Button>
            </Col>
      
          </Row>
        </Layout>
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

