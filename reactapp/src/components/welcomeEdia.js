import React, {useState, useEffect } from 'react';
import {Input, Typography, Space } from 'antd'; 
import { Button, Image } from 'react-bootstrap';


import Effectif from './effectif'
import Nav from './nav';


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
 
    let moduleQuestion;
    if (1==1) {
        moduleQuestion = <Effectif/>
    }


    return ( 
    <div>
        <Nav/>
        <h1 style={{color:'rebeccapurple', marginLeft: 30 , marginTop: 100}}>Welcome Edia</h1>  
        
        {moduleQuestion}

    </div>)


}
export default WelcomeEdia;
