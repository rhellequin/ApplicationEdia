import React, {useState, useEffect} from 'react';

import Loading from './Loading.js';

import './visuels/modaltest.css';

function Apptest(props){

    const [isLoading, setIsLoading] = useState (true)

    const [rollDice, setRollDice] = useState('')
    var tirage = (Math.floor( Math.random() * 10 ) +1);
    
    
    var rollingClic = ()=> {
        var tirage = (Math.floor( Math.random() * 7 ) +1);
        if (tirage==1){setRollDice(<img src='../images/1.png' alt='' />)}
        else if(tirage==2) {setRollDice(<img src='../images/2.png' alt='' />)}
        else if(tirage==3) {setRollDice(<img src='../images/3.png' alt='' />)}
        else if(tirage==4) {setRollDice(<img src='../images/4.png' alt='' />)}
        else if(tirage==5) {setRollDice(<img src='../images/5.png' alt='' />)}
        else if(tirage==6) {setRollDice(<img src='../images/6.png' alt='' />)}
        else if(tirage==7) {setRollDice(<img src='../images/7.png' alt='' />)}
        


        
        console.log(rollDice)
      
     }
    
     var tirage = (Math.floor( Math.random() * 7 ) +1);


     if (tirage==1){<img src='../images/1.png' alt='' />}
        else if(tirage==2) {<img src='../images/2.png' alt='' />}
        else if(tirage==3) {<img src='../images/3.png' alt='' />}
        else if(tirage==4) {<img src='../images/4.png' alt='' />}
        else if(tirage==5) {<img src='../images/5.png' alt='' />}
        else if(tirage==6) {<img src='../images/6.png' alt='' />}
        else if(tirage==7) {<img src='../images/7.png' alt='' />} 


        useEffect(() => {
            setTimeout(() =>{
                setIsLoading(false);
            }, 2500)
          
        })

    return (

<div>



</div>



//         <div className='Sidebar'>

            

//              <button onClick={ ()=>rollingClic() }>Clic</button>
// <p>{rollDice}</p> 
//  </div>







       
    )


}

export default Apptest