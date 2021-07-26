import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row  } from 'antd'; 
import Nav from './nav';
import Types from './types';
import 'antd/dist/antd.css';


function SearchPage () {

  
    const { Header, Footer, Sider, Content } = Layout;

    

    let moduleQuestion;
    if (1==1) {
        moduleQuestion = <Types/>
    }

    return ( 

        
        <div>
  
    <Layout>
    <Nav/>
      <Row>
      <Content
      style={{ 
        backgroundColor: '#E0E5E9',
        height: '490px',
        marginLeft: '15px',
        marginRight: '15px' 
        }}>
      <h1 class='question'>
      Quel type d’aide recherchez-vous? 
      </h1>
      {moduleQuestion}
      </Content>


      </Row>
   
     <Footer>
      <Col span={5} offset={19}>
      <Button color="primary" size='lg'
                                        style={{backgroundColor: '#0A62D0',
                                                 borderRadius:'10px',
                                                 fontSize: '16px',
                                                color: 'white'
                                                }}>
                Voir les aides
                
                </Button>
      </Col>      
      </Footer>
    </Layout>

    </div>
);
        
       



}
export default SearchPage;
