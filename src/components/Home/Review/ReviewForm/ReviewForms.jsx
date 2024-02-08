import React, { useState, useEffect } from 'react';
import StarRating from './StarRating'; // Assuming you have this component
import './ReviewForms.css';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
    setSubmittedReviews([...submittedReviews, newReview].slice(-5)); // Limit to latest 5 reviews

    // Clear the form fields
    setName('');
    setReview('');
    setRating(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % submittedReviews.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [submittedReviews]);

  return (
    <div className='ReviewFormContainer'>
      <div className='ReviewForm' style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }}
            />
          </label>
          <br />
          <label>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }}
            />
          </label>
          <br />
          <label>
            Rating:
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </label>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: '#0079d3',
              color: '#ffffff',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Display submitted reviews in a carousel */}
      <div className="ReviewCarousel">
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
              display: index === currentReviewIndex ? 'inline-block' : 'none',
              transition: 'transform 0.3s ease-in-out',
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
    </div>
  );
};

export default ReviewForm;
