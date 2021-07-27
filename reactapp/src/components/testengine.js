import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';

import SearchAids from './searchaids'


import 'antd/dist/antd.css';
import {Input, Typography, Card, Col, Row } from 'antd'; 
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function TestEngine (props) {

     
    const [projects, setProjects] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
        
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

        setNumberOfAids(props.numberOfAids);


        FindProjects();
         
      },[])   
    

    const { Text, Link } = Typography;

 



    const runSearch = async (elem) => {
        

    // Appel recherche :

        let parameters = [...props.searchOptions]
        parameters[props.indexOptions].valeur = projects[elem.key]._id
        const aids = await SearchAids(parameters);


    // Mise à jour du critère dans le store :
        props.updateSearchOptions(props.indexOptions,projects[elem.key]._id);



// Store des aids trouvées :
            props.updateAids(aids);
// Store du compteur d'aides :         
            const n = aids.length;
            props.updateNumberOfAids(n);
            setNumberOfAids(n);
        }





    const tb = projects.map((projet,i) => (
                <Menu.Item key={i} icon={<UserOutlined />}>{projet.projectName}</Menu.Item>
    ));



    const menu = (
        <Menu onClick={runSearch} >
          {tb}
        </Menu>
      );


    console.log('searchOptions :', props.searchOptions)


    return (

    <Row>
        <Col span={8} offset="4">
            <Space wrap>
            <Dropdown.Button  overlay={menu} style={{marginLeft:"0px"}} >
                Projets
            </Dropdown.Button>
            </Space>
            <Card title="Compteur Aids " bordered={true} 
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
                {numberOfAids}
            </Card> 
        </Col>
    </Row>
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
)(TestEngine)
