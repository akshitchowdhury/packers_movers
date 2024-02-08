import React from 'react';



const cardStyle = {
  width: '23rem',
  height: '400px', // Adjust the overall card height as needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '12px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle box shadow
    paddingBottom: "1px"
};

const imageStyle = {
  flex: '1', // Let the image take the available space
  objectFit: 'cover', // Maintain aspect ratio and cover the space
};

const cardTextStyle = {
  padding: '1rem',
  
};

const Cards = () => {
  return (
    <div style={cardStyle}>
      {/* <img src={oni} alt="Card" style={imageStyle} /> */}
      <div style={cardTextStyle}>
      <h5 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Card Title</h5>

        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {/* <button style={{ padding: '0.5rem 0.5rem', margin: '3px',background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Go somewhere
        </button> */}
      </div>
    </div>
  );
}

export default Cards;
