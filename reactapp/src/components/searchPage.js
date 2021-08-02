import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row, notification  } from 'antd'; 
import Navigation from './navigation';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom';


import {connect} from 'react-redux';
import 'antd/dist/antd.css';

import FilAriane from './filariane';

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
    if (indexOptions < (props.searchOptions.length - 1) && props.searchOptions[0].valeur != null) {
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
    let buttonVoirAides ='';
    if (props.numberOfAids < 200  && props.numberOfAids > 0 ) {
      buttonVoirAides = 
              <Button color="primary" size='lg' 
                          onClick={() => callResultPage()}
                          style={{backgroundColor: '#0A62D0',
                                  borderRadius:'10px',
                                  height: "60px",
                                  fontSize: '24px',
                                  color: 'white',                                                                         }}>
                      Voir les aides
              </Button>   

    }




    const callResultPage = async ()=> {

      const filAriane = await FilAriane(props.searchOptions);
      props.updateFilAriane(filAriane);
      console.log('SearchPage filAriane =', filAriane)
      setOnResultPage(true);
}



const openNotification = () => {
  
  notification.config({
    placement: 'bottomRight',
    bottom: 80,
    duration: 4,
    rtl: true,
  });
  notification.open({
    message: 'Votre recherche est trop large',
    description:
      'Cliquez sur Continuer pour affiner votre recherche',
    onClick: () => {
      //console.log('Notification Clicked!');
    },
  });
};



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

