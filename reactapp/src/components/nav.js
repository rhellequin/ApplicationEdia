import React from 'react';
import { Button  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Nav () {

    return ( 
    <div>
        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center' }}>
            <img src='../images/EDIA.png' style={{}} height='150px' />
            <div>
                <Button outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button>
                <Button color="primary" size='lg'style={{margin:'20px'}}>S'inscrire</Button>
            </div>
        </div>
    </div>


    )}
export default Nav;