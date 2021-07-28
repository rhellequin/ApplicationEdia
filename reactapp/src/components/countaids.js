import React from 'react';
 
 
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
 

function CountAids (props) {
   
    return (  

       
        <div style={{
              backgroundColor:'#E0E5E9',
              width:'600px',
              height:'73px',
              textAlign: 'center',
              fontFamily: 'Alata',
              fontSize: '30px',
              borderRadius:'10px',
              marginLeft:'5px'
              }}>
              {props.numberOfAids} aides disponibles
        </div>
        
    )}
 


export default CountAids;
     
