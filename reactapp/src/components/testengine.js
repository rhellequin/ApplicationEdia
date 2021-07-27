import React, {useState, useEffect } from 'react';



import 'antd/dist/antd.css';
import {Input, Typography, Card, Col, Row } from 'antd'; 
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';



/*
    Composant pour tester la communication avec le back 
    ===================================================
*/


function TestEngine () {

     
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);
        
    useEffect(() => {
         
        const FindProjects = async () => {
            const data = await fetch("/projects", {
                method: 'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
            })
            const body = await data.json()
            if (body.result) {
                setProjects(body.projects);
            }
        }




        FindProjects();
         
      },[])   
    

    const { Text, Link } = Typography;

    const handleMenuClick = (elem) => {
        console.log('Click = ', elem.key)
        setProject(projects[elem.key])
    }



    const tb = projects.map((projet,i) => (
                <Menu.Item key={i} icon={<UserOutlined />}>{projet.projectName}</Menu.Item>
    ));



    const menu = (
        <Menu onClick={handleMenuClick}>
          {tb}
        </Menu>
      );

/*
    return ( 
        <Row gutter={[16, 16]}>            
            {tb}
        </Row>
    )
    */

    return (

    <Row>
        <Col span={8} offset="4">
            <Space wrap>
            <Dropdown.Button  overlay={menu} style={{marginLeft:"0px"}} >
                Projets
            </Dropdown.Button>
            </Space>
            <Card title={project.projectDomain} bordered={true} 
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
                {project.projectName}
            </Card> 
        </Col>
    </Row>
    )



}


export default TestEngine;
