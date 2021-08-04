import React from 'react';

import './visuels/countaids.css';
 

 

function CountAids (props) {
   
    return (  

       
        <div className='BarreCompteur'>
              {props.numberOfAids} aides disponibles
        </div>
        
    )}
export default CountAids;
     