import React from 'react';
import './visuels/searchengine.css';
 
function CountAids (props) {

let displayCount;
if (props.numberOfAids > 1 ) {
    displayCount = props.numberOfAids + ' aides disponibles'
} else {
    displayCount = props.numberOfAids + ' aide disponible'
}

   
    return (   
        <div className='BarreCompteur'>
              {displayCount} 
        </div>
    )}
export default CountAids;
     