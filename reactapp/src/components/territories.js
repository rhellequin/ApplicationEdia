import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';


import 'antd/dist/antd.css';
import {Input, Typography, Card, Col, Row } from 'antd'; 
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function Territories (props) {

     
    const [projects, setProjects] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
        
    useEffect(() => {
         
        const FindTerritories = async () => {
            const data = await fetch("/territories", {
                method: 'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
            })
            const body = await data.json()
            if (body.result) {
                setTerritories(body.territories);
            }
        }
        setNumberOfAids(props.numberOfAids);
        FindTerritories();
      },[])   
    




// Appel de la recherche :
const runSearch = async (i) => {
        
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
    console.log('aids :',aids )
}

// Gestion du marquage projet :

let colorTextSelected = "White"
let colorBgSelected = "purple"
let colorText = "black"
let colorBg = "white"

const dataItem = territories.map ((t,i)=>( 
      {i: i, dept: t.territoryId, name: t.territoryName, colorText : colorText, colorBg: colorBg} 
      ));


if (iSelected>=0) {
  dataItem[iSelected].colorText = colorTextSelected
  dataItem[iSelected].colorBg=colorBgSelected   
}

// <Divider  orientation="center" style={{}}>Choisir dans la liste</Divider>

return (
  <div>
    <CountAids numberOfAids={numberOfAids}/>
    <Row style={{justifyContent: "center"}}>
      <List style={{backgroundColor: "white", width:"600px"}}
          size="small"
          pagination={{
            onChange: page => {
              console.log(page);
              },
            pageSize: 10,
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
)(Territories)