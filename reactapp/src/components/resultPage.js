import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row, Breadcrumb, Menu, Card, Tag, Badge, Modal } from 'antd'; 
import Navigation from './navigation';
import { AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  StarOutlined,
  HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import{Redirect} from "react-router-dom";
import Avatar from 'antd/lib/avatar/avatar';
import Bouton from './Bouton';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './resultPage.css';


import FilAriane from './filariane'

const { Header, Content, Footer, Sider } = Layout;




function ResultPage (props) {

  const [ResultList, setResultList] = useState([])
  const [addingAid, setAddingAid] = useState (false)
  const [addList, setAddList] = useState([])
  const [isLogin,setIsLogin]= useState(true)

  

  var importResult = props.aids.map((aid, i) => ({
  id: aid._id, name: aid.aidName, financeur:aid.aidFunders[0].funderName, montant:aid.aidAmount, niveauAide: aid.aidLevel.levelName, logo:'../images/pinguin.png', diff:'facile',delai: '6 mois'
  }));
  

  var importResult = props.aids.map((aid, i) => ({
  name: aid.aidName, financeur:aid.aidFunders[0].funderName, montant:aid.aidAmount, niveauAide: aid.aidLevel.levelName, logo:'../images/pinguin.png', diff:'facile',delai: '6 mois',
  type: aid.aidTypes[0].typeName, domaine: aid.aidActivitySector[0], enjeux: aid.aidProjects[0].projectName, profile:aid.aidProfiles[0].profileName, effectif:aid.aidNumberOfWorker[0], age: aid.aidCompanyAge[0], 

}));
  

      useEffect(() => {
        var resultat = async () => {
          importResult.sort( compare1 );
          console.log('useffect', importResult);
          setResultList(importResult);


          const filAriane = await FilAriane(props.searchOptions);
          console.log('filAriane ', filAriane);
        }
        resultat()




      }, [])

      

//fonctions de tri
      //Tri critère 1
      function compare1( a, b ) {
        if ( a.montant < b.montant ){
          return -1;
        }
        if ( a.montant > b.montant ){
          return 1;
        }
        return 0;
      }
     
       //Tri critère 2
       function compare2( a, b ) {
        if ( a.financeur < b.financeur ){
          return -1;
        }
        if ( a.financeur > b.financeur ){
          return 1;
        }
        return 0;
      }

      //Tri critère 3
      function compare3( a, b ) {
        if ( a.niveauAide < b.niveauAide ){
          return -1;
        }
        if ( a.niveauAide > b.niveauAide ){
          return 1;
        }
        return 0;
      }

//Tri critère 4
      function compare4( a, b ) {
        if ( a.diff < b.diff ){
          return -1;
        }
        if ( a.diff > b.diff ){
          return 1;
        }
          return 0;
            }

            //Tri critère 5
function compare5( a, b ) {
  if ( a.delai < b.delai ){
    return -1;
  }
  if ( a.delai > b.delai ){
    return 1;
  }
    return 0;
      }
    

  // Tri
  var tri1 = async () => {
    importResult.sort( compare1 );
    console.log('importResult', importResult);
    setResultList(importResult)
   
  }

  var tri2 = async () => {
    importResult.sort( compare2 );
    console.log('importResult', importResult);
    setResultList(importResult)
    
  }

  var tri3 = async () => {
    importResult.sort( compare3 );
    console.log('importResult', importResult);
    setResultList(importResult)
  }

  var tri4 = async () => {
    importResult.sort( compare4 );
    console.log('importResult', importResult);
    setResultList(importResult)
  }

  var tri5= async () => {
    importResult.sort( compare5 );
    console.log('importResult', importResult);
    setResultList(importResult)
  }
  
  var addUserAid= async(aide,id)=>{

 var copyList=[...ResultList]
 copyList=copyList.map((aide,i)=>{
if(aide.favorite==undefined ){
  if(aide.id==id){

    return {...aide,favorite:true}

}
else {
  return {...aide,favorite:false}

}
}
else{
  if(aide.id==id){
    return {...aide,favorite: !aide.favorite}
  }
  else {
    return {...aide,favorite: aide.favorite}
  }
}
 })
setResultList(copyList)

var newFavorite
if(aide.favorite==undefined || aide.favorite==false){
  newFavorite=true
}
else if(aide.favorite==true){
  newFavorite=false
}

    console.log(id)
    const data = await fetch('/add-favorite', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `id=${id}&token=${props.token}&favorite=${newFavorite}`
    })  
    const response = await data.json();
    console.log(response.result)

    if (response.result==false){
      setIsLogin(false)
    }
    
  }

 

  var displayList = ResultList.map((aide,i) => {
    if(aide.favorite ==true){
      var colorStar = {color: 'yellow'}
    } else {
      var colorStar = {color:'black'}
    }


return(
                
    <Col span={12} key={i}>
    <Card  bordered={false} style={{ 
        backgroundColor: '#E0E5E9',
        margin: '15px',
        borderRadius:'30px',
        height:'600px',
        display:'flex',
        flexDirection:'column'

                            
        }}>
            <Row style={{
              display:'flex',
              flexDirection:'row',
               alignSelf: "flex-start",
              justifyContent:'space-between',
              height:'80px',
            }}>
              
            <img src={aide.logo}  height='80px' />

            
            
            <p ><FontAwesomeIcon icon={faStar}
            style={colorStar}  onClick={()=>addUserAid(aide,aide.id)}/></p>

            </Row>
            <Row style={{justifyContent:'center',
            alignItems: 'center',
            fontFamily: 'Alata',
            fontSize:'30px',
            textAlign: 'center',
           
            display:'flex',
            flexDirection:'column',
            height:'200px'
           
            }}>

            
            <div style={{
            marginBottom:'10px'
           
            }}>{aide.name}</div>
            <div>{aide.montant} €</div>
            
            </Row>
            <Row style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            textAlign: 'center',
            fontFamily: 'Alata',
           
            height:'30%',
            height:'170px',
           }}>
              <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            textAlign: 'center',
            fontFamily: 'Alata',
            fontSize:'18px',
            
           }}>
              <p>{aide.financeur}</p>
              <p>{aide.niveauAide}</p>
              
              </div>
              <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            textAlign: 'center',
            fontFamily: 'Alata',
            fontSize:'18px',
            
            
           }}>
              <p>Difficulté d'obtention: {aide.diff}</p>
              <p>Délai d'obtention:{aide.delai}</p>
              </div>
            
            
            </Row>
            <Row style={{
            
            justifyContent:'center',
           
            
            alignContent: "flex-end",
            marginBottom:'auto',
            height:'100px',
            }}>
            
<Bouton />
            </Row>
            
            
            
            
           
    </Card>
    </Col>
    )
          })


if(isLogin==true){

  return ( 

        
<Layout>
<Navigation/>
<Col md={{ span: 8, offset: 14 }}>
        <div style={{
          backgroundColor:'#E0E5E9',
          width:'600px',
          height:'73px',
          textAlign: 'center',
          fontFamily: 'Alata',
          fontSize: '30px',
          borderRadius:'10px',
          marginLeft:'5px'
        }}>
          534 aides disponibles
        </div>
</Col>


   
            
         
            
<Col md={{ span: 24 }} className='Ariane' >
  <div><img src='../images/1.png'  />type d'aide:{ResultList.type} </div>
  <div><img src='../images/2.png'  />domaine d'aide: </div>
  <div><img src='../images/3.png'  />enjeux: </div>
  <div><img src='../images/4.png'  />secteur d'activité:</div>
  <div><img src='../images/5.png'  />département:</div>
  <div><img src='../images/6.png'  />effectif: </div>
  <div><img src='../images/7.png'  />question 7</div>


</Col>


  <Layout>
    <Sider style={{ backgroundColor:'#E0E5E9'}}>
      
   
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="vertical"
          theme="light"
          
                 
        >
<p style={{
           fontSize:'24px',
           alignContent:'center',
           marginTop:'34px',
           marginBottom: '40px',
           color: 'black',
           textAlign: 'center',
           fontFamily: 'Alata',
          }}>Trier par</p>

          <Menu.Item onClick={() => tri1()} key="1" style={{color:'black'}} > 
                    Montant
          </Menu.Item>
          <Menu.Item onClick={() => tri2()} key="2" style={{color:'black'}}>
                 Financeur
          </Menu.Item>
          <Menu.Item onClick={() => tri3()} key="3" style={{color:'black'}}>
                 Niveau de l'aide
          </Menu.Item>
          <Menu.Item onClick={() => tri4()} key="4" style={{color:'black'}}>
                    Difficulté d'obtention
          </Menu.Item>
          <Menu.Item  onClick={() => tri5()} key="5" style={{color:'black'}}>
                  Délai d'obtention
          </Menu.Item>
          
          
        </Menu>
     
    
    </Sider>

    <Content >
      



    <div className="site-card-wrapper">
    <Row gutter={16}>








{displayList}
       </Row>  
    
  </div> 



    </Content>
   
  </Layout>
  
  
 
</Layout>

);
        
} else {
  return(
<Redirect to='/signin'/>

  )
}       



}

function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids, aids: state.aids, token: state.user.token}
 }


export default connect(
  mapStateToProps,
  null
 )(ResultPage);