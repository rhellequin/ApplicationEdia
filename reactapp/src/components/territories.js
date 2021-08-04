import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';


import 'antd/dist/antd.css';

import {
  Typography,
  Col,
  Row,
  Menu,
  Dropdown,
  Space,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  message,
} from 'antd';


import './visuels/territories.css';
import SearchAids from './searchaids'
import CountAids from './countaids'


function Territories (props) {

    const { Text, Link } = Typography;

    const [territoryName, setTerritoryName] = useState();
    const [territories, setTerritories] = useState([]);
    const [territory, setTerritory] = useState();

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


// La recherche sur le territoire est by passée 
// car les données récupérées sont inexploitables dans l'état.
// ============================================================
  
  let parameters = [...props.searchOptions]
  // parameters[props.indexOptions].valeur = territories[i]._id
  const aids = await SearchAids(parameters);

// Mise à jour du Store :
    //props.updateSearchOptions(props.indexOptions,territories[i]._id);
    // props.updateAids(aids);        
    const n = aids.length;
    props.updateNumberOfAids(n);
    setNumberOfAids(n); 
 
  }

// Input département :
const inputDept =  (value) => {
    setTerritory(value);
  }
  
// recherche du département :
const searchDept = async () => {
 
  const index = territories.findIndex((d) => d.territoryId == territory)
  if (index < 0) {
    message.error("Département inconnu")
    setTerritoryName('');
  } else {
    setTerritoryName(territories[index].territoryName);
    runSearch(index);
  }
} 


return (
  <div>
    <CountAids numberOfAids={numberOfAids}/>
    <Form.Item 
        className="form-dept"  >
        <Text style={{textAlign:'right', marginBottom:'10px',fontWeight:'bold' ,fontSize:20, fontFamily:'Spartan', marginRight:'50px', color: 'white'}}>
        Votre département</Text>
        <InputNumber  
            style={{textAlign:'right', marginBottom:'10px',fontWeight:'bold' ,fontSize:20, fontFamily:'Arial'}}
            
            placeholder="01" 
            value={territory} 
            onChange={inputDept} 
            className="form-field"/>
            <Text
            style={{textAlign:'left', marginBottom:'10px',fontWeight:'bold' ,fontSize:20, fontFamily:'Spartan', marginLeft:'50px', color: 'white'}}>
            {territoryName}</Text>
            
        <Button className="buttonTerritory" onClick={searchDept}>Valider </Button>  
 
      </Form.Item>
    
  </div>
)}





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