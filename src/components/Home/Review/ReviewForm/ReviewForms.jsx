import React, { useState } from 'react';
import StarRating from './StarRating'; // Assuming you have this component
import './ReviewForms.css';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that a name is entered
    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }

    // Create a new review object
    const newReview = {
      name,
      review,
      rating,
    };

    // Update the state with the new review
    setSubmittedReviews([...submittedReviews, newReview].slice(-6)); // Limit to latest 5 reviews

    // Clear the form fields
    setName('');
    setReview('');
    setRating(0);
  };

  return (
    <div className='ReviewFormContainer'>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>Testimonials</h2>
      {/* Display submitted reviews */}
      <div className="ReviewCardsContainer">
        {submittedReviews.map((review, index) => (
          <div
            key={index}
            className="ReviewCard"
            style={{
              width: '100px',
              height: '100px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '8px',
              margin: '0 10px',
              marginLeft: '100px',
              display: 'inline-block', // Display cards inline
            }}
          >
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0', marginBottom: '5px' }}>
              {review.name}
            </p>
            <p style={{ marginBottom: '5px' }}>{review.review}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: i < review.rating ? '#ffc107' : '#e4e5e9',
                    marginRight: '2px',
                    fontSize: '14px',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='ReviewForm' style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Rating:
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: '#0079d3',
              color: '#ffffff',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
