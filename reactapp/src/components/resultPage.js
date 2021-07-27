import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row, Breadcrumb, Menu } from 'antd'; 
import Nav from './nav';
import { AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

function ResultPage () {

  
    

    return ( 

        
<Layout>
<Nav/>
<Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 1</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Réponse 2</a>
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
    <Sider style={{ backgroundColor:'green'}}>
      
    <div style={{ width: 256 }}>
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          
        </Menu>
      </div>
    
    </Sider>

    <Content style={{ backgroundColor:'red'}}>main content</Content>
   
  </Layout>
  
  
 
</Layout>
);
        
       



}
export default ResultPage;
