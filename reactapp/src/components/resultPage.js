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




const { Header, Content, Footer, Sider } = Layout;




function ResultPage (props) {

  const [ResultList, setResultList] = useState([])
  const [addingAid, setAddingAid] = useState (false)
  const [addList, setAddList] = useState([])
  const [isLogin,setIsLogin]= useState(true)

  

  var importResult = props.aids.map((aid, i) => ({
  id: aid._id, name: aid.aidName, financeur:aid.aidFunders[0].funderName, montant:aid.aidAmount, niveauAide: aid.aidLevel.levelName, logo:'../images/pinguin.png', diff:'facile',delai: '6 mois'
  }));
  



 var ListEssai=[
    {name: 'TROP COOL', montant:'5000', financeur:'Cresus', niveauAide:'local', diff:'2', delai: '6 mois', logo:'../images/pinguin.png'},
    {name: "BESOIN d'ARGENT", montant:'2000', financeur:'Rockfeller', niveauAide:'départemental', diff:'3', delai:'3 mois', logo:'../images/pinguin.png'},
    {name: 'NEED HELP', montant:'8000', financeur:'Jeff Bezos', niveauAide:'européen', diff:'1', delai:'2 mois', logo:'../images/pinguin.png' },
      ]

      useEffect(() => {
        var resultat = async () => {
          importResult.sort( compare1 );
          console.log('useffect', importResult);
          setResultList(importResult);
         
          
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
<Breadcrumb style={{
          fontFamily: 'Alata',
          fontSize: '30px',
          
         
        }}>
    
    <Breadcrumb.Item >
    <a href="">
    <HomeOutlined /></a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span style={{
                              backgroundColor:'yellow',
                              width:'50px',
                              height:'50px',
                              textAlign: 'center',
                              fontFamily: 'Alata',
                              fontSize: '30px',
                              borderRadius:'50px',
                              marginLeft:'5px'
                              
                            }}>1</span>
      <a href=""><span>Réponse 1</span></a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>2</span><a href="">Réponse 2</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>3</span><a href="">Réponse 3</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>4</span><a href="">Réponse 4</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>5</span><a href="">Réponse 5</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>6</span><a href="">Réponse 6</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>7</span><a href="">Réponse 7</a>
    </Breadcrumb.Item>
  </Breadcrumb>
<div>

</div>

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
          <Menu.Item  onClick={() => tri5()} key="5" >
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