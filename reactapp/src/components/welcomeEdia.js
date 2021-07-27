import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Icon, Card, Col, Row } from 'antd'; 
import { Button, Image } from 'react-bootstrap';
import 'antd/dist/antd.css';


import Types from './types'
import TestEngine from './testengine';
import Nav from './nav';

/*
    Composant pour tester la communication avec le back 
    ===================================================
*/


function WelcomeEdia () {


    let moduleQuestion;
    if (1==1) {
        moduleQuestion = <TestEngine/>
    }


    return ( 
        <div>
            <Nav/>
            {moduleQuestion}

        </div>
       

    )
}
export default WelcomeEdia;
