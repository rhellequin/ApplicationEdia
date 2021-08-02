import React, {useState, useEffect} from 'react';
import Loader from "react-loader-spinner";
import Loading from './Loading.js';
import Clock from './Clock.js';


 

 

function CountAids (props) {
   
    const [isLoading, setIsLoading] = useState (true)

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false);
        }, 2500)
      
    })


    return (  

<div>

{isLoading==true?
    <Loading/>:
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


}

</div>


       
        
        
    )}
 


export default CountAids;
     
