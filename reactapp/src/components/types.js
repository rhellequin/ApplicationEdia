import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Button, Icon, Card, Col, Row } from 'antd'; 
import 'antd/dist/antd.css';


/*
    Composant pour tester la communication avec le back 
    ===================================================
*/
const {Meta} = Card;

function Types () {

    const [aidTypes, setAidTypes] = useState([]);
    const { Search } = Input;
    const { Text } = Typography;

    useEffect(() => {
        const findTypes = async() => {
            const data = await fetch(`/types`, {
                method: 'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
            })
            const body = await data.json()
            if (body.result) {
                setAidTypes(body.types);
                console.log("aidtypes", aidTypes)
            }
        }
    
        findTypes()    
      },[])


   



    return ( 
        

<div className="site-card-wrapper">
    <Row gutter={16}>

    {aidTypes.map((type,i) => (
                
                    <Col span={8} key={i}>
                    <Card bordered={false} style={{ 
                        backgroundColor: '#0A62D0', 
                        marginRight: '15px',
                        marginLeft: '15px',
                        marginTop: '15px',
                        marginBottom: '15px',
                        textAlign: 'center',
                        fontFamily: 'Alata',
                        borderRadius: '10px',
                        fontSize: '18px',
                        color: 'white'
                        
                        }}>
                            {type.typeName}
                    </Card>
                    </Col>

              ))}
       </Row>  
    
  </div>   

        )


}
export default Types;

   {/* <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col> */}