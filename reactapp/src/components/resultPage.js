import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row, Breadcrumb, Menu, Card } from 'antd'; 
import Nav from './nav';
import { AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';
import { attachTypeApi } from 'antd/lib/message';

const { Header, Content, Footer, Sider } = Layout;




function ResultPage () {

 var ListEssai=[
    {name: 'AAA', crit1:'bbb', crit2:30, crit3:37, crit4:'ddd', crit5:60},
    {name: 'BBB', crit1:'aaa', crit2:20, crit3:47, crit4:'eee', crit5:70},
    {name: 'CCC', crit1:'ccc', crit2:60, crit3:57, crit4:'fff', crit5:80},
      ]















//fonctions de tri
      //Tri critère 1
      function compare1( a, b ) {
        if ( a.crit1 < b.crit1 ){
          return -1;
        }
        if ( a.crit1 > b.crit1 ){
          return 1;
        }
        return 0;
      }
     
       //Tri critère 2
       function compare2( a, b ) {
        if ( a.crit2 < b.crit2 ){
          return -1;
        }
        if ( a.crit2 > b.crit2 ){
          return 1;
        }
        return 0;
      }

      //Tri critère 3
      function compare3( a, b ) {
        if ( a.crit3 < b.crit3 ){
          return -1;
        }
        if ( a.crit3 > b.crit3 ){
          return 1;
        }
        return 0;
      }

//Tri critère 4
      function compare4( a, b ) {
        if ( a.crit4 < b.crit4 ){
          return -1;
        }
        if ( a.crit4 > b.crit4 ){
          return 1;
        }
          return 0;
            }

            //Tri critère 5
function compare5( a, b ) {
  if ( a.crit5 < b.crit5 ){
    return -1;
  }
  if ( a.crit5 > b.crit5 ){
    return 1;
  }
    return 0;
      }
    

  // Tri alphabétique
  var tri1 = async () => {
    ListEssai.sort( compare1 );
    console.log('ListEssai', ListEssai)
  }

  var tri2 = async () => {
    ListEssai.sort( compare2 );
    console.log('ListEssai', ListEssai)
  }

  var tri3 = async () => {
    ListEssai.sort( compare3 );
    console.log('ListEssai', ListEssai)
  }

  var tri4 = async () => {
    ListEssai.sort( compare4 );
    console.log('ListEssai', ListEssai)
  }

  var tri5= async () => {
    ListEssai.sort( compare5 );
    console.log('ListEssai', ListEssai)
  }
  
 
  return ( 

        
<Layout>
<Nav/>
<Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
    <a href="">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 1</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 2</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 3</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 4</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 5</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 6</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 7</a>
    </Breadcrumb.Item>
  </Breadcrumb>
<div>

</div>

  <Layout>
    <Sider style={{ backgroundColor:'black'}}>
      
   
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          
          
        >
          <Menu.Item key="1"  icon={<PieChartOutlined /> }> 
          <Button onClick={() => tri1()}  style={{width:'80px'}} type="primary">TRI CRITERE 1</Button>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Button onClick={() => tri2()}  style={{width:'80px'}} type="primary">TRI CRITERE 2</Button>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Button onClick={() => tri3()}  style={{width:'80px'}} type="primary">TRI CRITERE 3</Button>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
          <Button onClick={() => tri4()}  style={{width:'80px'}} type="primary">TRI CRITERE 4</Button>
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
          <Button onClick={() => tri5()}  style={{width:'80px'}} type="primary">TRI CRITERE 5</Button>
          </Menu.Item>
          
        </Menu>
     
    
    </Sider>

    <Content >
    {/* <div className="site-card-wrapper">
    <Row gutter={16}>

    {ListEssai.map((aide,i) => (
                
                    <Col span={16} key={i}>
                    <Card title="Card title" bordered={false} style={{ 
                        backgroundColor: '#0A62D0'                        
                        }}>
                            {
                              aideNom:name;

                            }
                    </Card>
                    </Col>

              ))}
       </Row>  
    
  </div>  */}



    </Content>
   
  </Layout>
  
  compare
 
</Layout>

);
        
       



}
export default ResultPage;
