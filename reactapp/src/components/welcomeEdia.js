import React, {useState, useEffect } from 'react';
import {Input, Typography, Space } from 'antd'; 


/*
    Composant pour tester la communication avec le back 
    ===================================================
*/


function WelcomeEdia () {

    const [aidName, setAidName] = useState('Le nom de Aid !');
    const { Search } = Input;
    const { Text } = Typography;

    const onSearch = async (value) =>  {  
        
        const data = await fetch(`/importdata/aidinfo?aidId=${value}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
        })
        const body = await data.json()
        if (body.result) {
            setAidName(body.aid.aidName);
        }
        
    }


    return ( 
    <div style={{color:'rebeccapurple', marginLeft: 30 , marginTop: 100}}>
        <h1>Welcome Edia</h1> 
        
        <Search placeholder="input search text" onSearch={onSearch} enterButton placeholder='Enter Aid Id'/>

        <Space direction="vertical">
            <Text type="secondary" >{aidName}</Text>
        </Space>,




    </div>)


}
export default WelcomeEdia;
