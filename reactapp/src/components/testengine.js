import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';

import SearchAids from './searchaids'


import 'antd/dist/antd.css';
import {Input, Typography, Card, Col, Row, List, Divider } from 'antd'; 
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';

import { DownOutlined, UserOutlined } from '@ant-design/icons';


function TestEngine (props) {

     
    const [projects, setProjects] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
    const [iSelected, setISelected] = useState(-1)
        
    const { Text, Link } = Typography;


    useEffect(() => {
         
        const FindProjects = async () => {
            const data = await fetch("/projects", {
                method: 'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
            })
            const body = await data.json()
            if (body.result) {

              const tb = filterProject(body.projects);
              setProjects(tb);
            }

        }
        setNumberOfAids(props.numberOfAids);
        FindProjects();
         
      },[])   
    

    

    const filterProject = (tb) => {

      let projects = [];
      
      for (let i=0;i<tb.length;i++) {
          let projectFound = false;
          for (let j=0;j<props.aids.length && (!projectFound);j++) {           
              for (let k=0;k<props.aids[j].aidProjects.length && (!projectFound);k++) {
                //console.log ('Project : ',tb[i]._id, 'aidProject :', props.aids[j].aidProjects[k]._id)
                if (tb[i]._id == props.aids[j].aidProjects[k]._id) {
                 // console.log('Project Found : ', props.aids[j].aidProjects[k].projectName)
                  projectFound = true;
                  projects.push(tb[i])
                }
              }
          }
      } 


      return projects;
    }




    const runSearch = async (i) => {
        
      setISelected(i);

    // Appel recherche :
        let parameters = [...props.searchOptions]
        parameters[props.indexOptions].valeur = projects[i]._id
        const aids = await SearchAids(parameters);
    // Mise à jour du critère dans le store :
        props.updateSearchOptions(props.indexOptions,projects[i]._id);
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


    let colorTextSelected = "White"
    let colotBgSelected = "purple"
    let colorText = "black"
    let colorBg = "white"
  
    const dataItem = projects.map ((p,i)=>( 
          {i: i, name: p.projectName, domain: p.projectDomain, colorText : colorText, colorBg: colorBg} 
          ));

    dataItem.sort(function(a,b) {
      if (a.name < b.name) {
        return -1 }
        else {
          return 0
              } 
    });

    if (iSelected>=0) {
      dataItem[iSelected].colorText = colorTextSelected
      dataItem[iSelected].colorBg=colotBgSelected   
    }
    


    return (

        <Row style={{justifyContent: "center"}}>
          <h2 style={{color:'#ff33e0'}}>Déjà {numberOfAids} aides!</h2> 
          <Divider  orientation="center" style={{}}>Choisir dans la liste</Divider>
          <List style={{backgroundColor: "white", width:"600px"}}
              size="small"
              pagination={{
                onChange: page => {
                  console.log(page);
                  },
                pageSize: 7,
                }}



                bordered
                dataSource={dataItem}
                renderItem={item => (

              <List.Item>
                <Typography.Text  
                  style={{color: item.colorText, backgroundColor: item.colorBg}}
                  onClick={() => {runSearch(item.i)}}
                  >{item.name}</Typography.Text>  
              </List.Item>
            )}
          />
        </Row>

    )






/*
<Row>
        <h1 class='question' style={{color:'#ff33e0'}}>Déjà {numberOfAids} aides!</h1> 
        <Col span={8} offset="4">
            <Space wrap>
            <Dropdown.Button  overlay={menu} style={{marginLeft:"0px"}} >
                Projets
            </Dropdown.Button>
            </Space>
            
        </Col>
    </Row>

*/


}



function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids, aids: state.aids  }
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
