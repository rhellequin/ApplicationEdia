import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Icon, Card, Col, Row } from 'antd'; 
import { Button, Image } from 'react-bootstrap';
import 'antd/dist/antd.css';


import Types from './types'
import Nav from './nav';
import { Card, Col, Row } from 'antd';

/*
    Composant pour tester la communication avec le back 
    ===================================================
*/


function WelcomeEdia () {


    let moduleQuestion;
    if (1==1) {
        moduleQuestion = <Types/>
    }


    return ( 
        <div>
            <Nav/>
            {moduleQuestion}

        </div>
       

    )
}
export default WelcomeEdia;
