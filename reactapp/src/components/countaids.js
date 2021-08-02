import React from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row, Breadcrumb, Menu, Card, Tag, Badge, Modal } from 'antd'; 
import './visuels/countaids.css';
 

 

function CountAids (props) {
   
    return (  

       
        <div className='BarreCompteur'>
              {props.numberOfAids} aides disponibles
        </div>
        
    )}
 


export default CountAids;
     
