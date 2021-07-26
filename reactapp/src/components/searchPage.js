import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col  } from 'antd'; 



function SearchPage () {

    // const [aidName, setAidName] = useState('Le nom de Aid !');
    // const { Search } = Input;
    // const { Text } = Typography;

    // const onSearch = async (value) =>  {  
        
    //     const data = await fetch(`/importdata/aidinfo?aidId=${value}`, {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
    //     })
    //     const body = await data.json()
    //     if (body.result) {
    //         setAidName(body.aid.aidName);
    //     }
        
    // }
    const { Header, Footer, Sider, Content } = Layout;


    return ( 

        
        <div>



  
    <Layout>

      <Header 
      style={{ 
        Col: 24,
        backgroundColor: 'blue', 
        margin:'15px', 
        display:'flex',
        flexDirection: 'row',
         }}
      >
          
          <div
          style={{ 
        backgroundColor: 'green', 
        width: '211px',
        height: '180px'
        
        }}>
          </div>
          <Button 
          style={{ 
        backgroundColor: 'green', 
        width: '323px',
        height: "67px"
    }}
         >SignIn</Button>

          <Button
            style={{ 
            backgroundColor: 'green', 
            width: '323px',
            height: "67px"
        }}>
            SignUp
            </Button>
          
          
      
      </Header>


      <Content
      style={{ 
        backgroundColor: 'grey', 
        
        height: "640px"
        
        }}>
      <h1 class='question'>
      Quel type d’aide recherchez-vous? 

      </h1>
      
      </Content>



      <Footer
      style={{ 
        backgroundColor: 'yellow', 
        width: '1252',
        height: "200"
        
        }}>
      
      Footer</Footer>
    </Layout>

   
  
    </div>
);
        
       



}
export default SearchPage;
