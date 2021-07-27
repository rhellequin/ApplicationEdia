import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row  } from 'antd'; 
import Nav from './nav';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Types from './types';
import {connect} from 'react-redux';
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
   
   <Row>
   <Col xs={{ span: 1, offset: 1 }} md={{ span: 1, offset: 10 }}>
     <Button color="primary" size='lg'
                                        style={{backgroundColor: '#0A62D0',
                                                height: '100px',
                                                 borderRadius:'10px',
                                                 fontSize: '32px',
                                                color: 'white',
                                                height: "60px",
                                                alignItems: 'center',
                                                verticalAlign: 'center'
                                                }}>
                <LeftOutlined  />
                
        </Button>
        </Col>    

                
    <Col xs={{ span: 1, offset: 1 }} md={{ span: 6, offset: 2 }}>           
                <Button color="primary" size='md'
                                        style={{backgroundColor: '#0A62D0',
                                                 borderRadius:'10px',
                                                 fontSize: '32px',
                                                color: 'white',
                                                height: "60px"
                                                }}>
                <RightOutlined />
                          
        </Button>
        </Col>  
        <Col xs={{ span: 5, offset: 1 }} md={{ span: 1 }}>
      <Button color="primary" size='lg'
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
export default SearchPage;
