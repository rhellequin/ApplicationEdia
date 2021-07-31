import React from 'react';

 

 

function CountAids (props) {
   
    return (  

       
        <div style={{
           backgroundColor: '#E0E5E9',
           position: 'absolute',
           top:'74px',
           right:'15px',
            textAlign: 'center',
            width:'400px',
              fontFamily: 'Alata',
              fontSize: '28px',
              borderRadius:'10px',
              marginLeft:'5px',
            
              }}>
              {props.numberOfAids} aides disponibles
        </div>
        
    )}
 


export default CountAids;
     
