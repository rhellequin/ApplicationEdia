// Affichage d'un Spin pendant la recherche :
//==============================================


import React from 'react';
import { Spin, Space } from 'antd';

function SpinSearch (props) {
   
    return (  
        <row style={{
                    position: "absolute",
                    top: "80px",
                    left: "1200px"}}>        
                <Spin size="small" spinning={props.isSpinning}/>
                <Spin size="medium" spinning={props.isSpinning}/>
                <Spin size="large" spinning={props.isSpinning}/>

        </row>
    )}
 


export default SpinSearch;
     
