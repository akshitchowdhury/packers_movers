import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import oni from '../../assets/pet.webp';

function Cards() {
  const cardStyle = {
    width: '18rem',
    height: '400px', // Adjust the overall card height as needed
    display: 'flex',
    flexDirection: 'column',
  };

  const imageStyle = {
    flex: '1', // Let the image take the available space
    objectFit: 'cover', // Maintain aspect ratio and cover the space
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={oni} style={imageStyle} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
