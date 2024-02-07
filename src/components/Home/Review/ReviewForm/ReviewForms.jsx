import React, { useState } from 'react';
import StarRating from './StarRating'; // Assuming you have this component
import './ReviewForms.css'


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
    setSubmittedReviews([...submittedReviews, newReview]);
  
    // Clear the form fields
    setName('');
    setReview('');
    setRating(0);
  };
  

  return (<>
  
  <div className='ReviewForm' style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }} >
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

      {/* Display submitted reviews */}
      <div>
        {submittedReviews.map((review, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              margin: '20px 0',
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
                    marginRight: '5px',
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
</>
    
  );
};

export default ReviewForm;
