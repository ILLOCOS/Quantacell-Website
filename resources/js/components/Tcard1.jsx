import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage3 from "./Images/webd.jpg";
import '../../css/cardsu.css';
import React from 'react';
import Emilia from './Images/emilia.jpg';


var sectionStyle = {
  backgroundImage: `url(${Himage3})`,
  width: '18rem',
  backgroundSize: 'cover',
  backgroundPosition:'center',
  
}

function TCard1() {
  return (
    <Card className = "card" >
   
      <Card.Body className = "card-content">
      <div class="shadow-effect">
                <img class="img-circle" src={Emilia} />
                <p>{description}</p>
            </div>
        <Card.Title className = "card-title">Website Development</Card.Title>
        <Card.Text className = "card-body">
        
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default TCard1;