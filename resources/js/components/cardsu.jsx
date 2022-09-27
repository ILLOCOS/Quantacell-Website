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
var sectionStyle2 = {
  backgroundImage: `url(${Emilia})`,
  width: '18rem',
  backgroundSize: 'cover',
  backgroundPosition:'center',
  
}

function Card1() {
  return (
    <Card className = "card" style={sectionStyle}>
   
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Website Development</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
  
}

function TCard1() {
  return (
    <Card className = "card2" style={sectionStyle2}>
   
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Emilia Clarke</Card.Title>
        <Card.Text className = "card-body2">
          Amazing!
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
  
}

export {Card1, TCard1};