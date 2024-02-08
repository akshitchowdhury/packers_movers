import React from 'react';

const GoogleReviewButton = () => {
  const handleReviewClick = () => {
    // Replace 'YOUR_GOOGLE_PLACES_ID' with your actual Google Places ID
    // You can find your Google Places ID by searching for your business on Google Maps
    const googlePlacesId = '0x8105361c7a5b6cb1:0x5bb38919fd174b44';

    // Construct the URL for writing a Google review
    const reviewUrl = `https://search.google.com/local/writereview?placeid=${googlePlacesId}`;
    
    // Redirect the user to write a review
    window.location.href = reviewUrl;
  };

  return (
    <button onClick={handleReviewClick}>
      Write a Google Review
    </button>
  );
};

export default GoogleReviewButton;
