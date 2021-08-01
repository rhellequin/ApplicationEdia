import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './visuels/Loader.css';

const Loading = () => {
    return (
        <div className="BarreLoader">    
        <div className='Loader'>
            <div className="Face" id="Face1">
                <div className= "Circle" id="Circle1"></div>
            </div>

            <div className="Face" id="Face2">
                <div className= "Circle" id="Circle2"></div>
            </div>
            
        </div> 
            {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      
        </div>
    )
}

export default Loading
