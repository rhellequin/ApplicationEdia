// Affichage d'un Spin pendant la recherche :
//==============================================


import React from 'react';
import { Spin, Space } from 'antd';
import './visuels/searchengine.css';

function SpinSearch (props) {
   
    return (  
     

<row className='BarreLoader'>        

<Spin size="large" spinning={props.isSpinning}/>

</row>
    )}
 


export default SpinSearch;
     
