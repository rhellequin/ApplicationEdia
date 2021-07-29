import React, { useState } from 'react';
import Bouton from './Bouton';

function Apptest(props){



    const [rollDice, setRollDice] = useState('')
    
    
    
    var rollingClic = ()=> {
        var tirage = (Math.floor( Math.random() * 10 ) +1);
        if (tirage==1){setRollDice("un")}
        else if(tirage==2) {setRollDice("deux")}
        else if(tirage==3) {setRollDice("trois")}
        else if(tirage==4) {setRollDice("quatre")}
        else if(tirage==5) {setRollDice("cinq")}
        else if(tirage==6) {setRollDice("six")}
        else if(tirage==7) {setRollDice("sept")}
        else if(tirage==8) {setRollDice("huit")}
        else if(tirage==9) {setRollDice("neuf")}
        else if(tirage==10) {setRollDice("dix")}
        else if(tirage==11) {setRollDice("onze")}

        
        console.log(rollDice)
      
     }

    return (
        <div>
<button onClick={ ()=>rollingClic() }>Clic</button>
<p>{rollDice}</p>
        </div>
    )


}

export default Apptest