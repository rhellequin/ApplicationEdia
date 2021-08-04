import React, {useState, useEffect } from 'react';


import {connect} from 'react-redux';
import SearchAids from './searchaids';
import CountAids from './countaids';
import SpinSearch from './spinsearch';

import 'antd/dist/antd.css';
import './visuels/projects.css';
import {Input, Typography, Card, Col, Row, List, Divider } from 'antd'; 
import { Container } from 'reactstrap';


function Projects (props) {

  const [projects, setProjects] = useState([]);
  const [numberOfAids, setNumberOfAids] = useState(0);
  const [iSelected, setISelected] = useState(-1);
  const [isSpinning,setIsSpinning] = useState(false);   

   
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
    

    
// On limite les projects qui sont présents sur les aides sélectionnées :
  const filterProject = (tb) => {

    let projects = [];     
    for (let i=0;i<tb.length;i++) {
      let projectFound = false;
      for (let j=0;j<props.aids.length && (!projectFound);j++) {           
        for (let k=0;k<props.aids[j].aidProjects.length && (!projectFound);k++) {
          if (tb[i]._id == props.aids[j].aidProjects[k]._id) {
            projectFound = true;
            projects.push(tb[i])
          }
        }
      }
    } 
    return projects;
  }



// Appel de la recherche :
  const runSearch = async (i) => {
        
    setIsSpinning(true); // Affichage Spin de recherche
    setISelected(i); // pour gérer le marquage du projet sélectionné :

    let parameters = [...props.searchOptions]
    parameters[props.indexOptions].valeur = projects[i]._id
    const aids = await SearchAids(parameters);

  // Mise à jour du Store :
    props.updateSearchOptions(props.indexOptions,projects[i]._id);
    props.updateAids(aids);        
    const n = aids.length;
    props.updateNumberOfAids(n);
    setNumberOfAids(n);
    setIsSpinning(false); 
}

// Gestion du marquage projet :

let colorTextSelected = "white"
let colorBgSelected = "#285fda"
let colorText = 'black'
let colorBg =  'white'


  
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
    dataItem[iSelected].colorBg=colorBgSelected   
  }
    
  const gStyle = { background: '#0092ff', padding: '8px 0' };


  return (
    <div>
      <CountAids numberOfAids={numberOfAids}/>
      <SpinSearch isSpinning={isSpinning}/>
      <div className='scroll-container' border='1px solid #E0E5E9'>
        <List 
          dataSource={dataItem}
          renderItem={item => (
            <List.Item 
                    style={{color: item.colorText, backgroundColor: item.colorBg, fontSize: '16px', fontFamily: 'Inter',border:'1px solid #E0E5E9'}}
                    onClick={() => {runSearch(item.i)}}>      
                <Col offset={1} span={8}>{item.domain}</Col>
                <Col span={14}>{item.name}</Col>
            </List.Item>)}
        />     
      </div>
    </div>
  )
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
)(Projects)
