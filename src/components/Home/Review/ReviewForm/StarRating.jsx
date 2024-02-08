import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onRatingChange }) => {
  const totalStars = 5;

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => onRatingChange(index + 1)}
          color={index < rating ? 'black' : '#e4e5e9'}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default StarRating;
