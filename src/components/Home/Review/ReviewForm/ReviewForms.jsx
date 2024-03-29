import React, { useState, useEffect } from 'react';
import StarRating from './StarRating'; // Assuming you have this component
import './ReviewForms.css';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  useEffect(() => {
    // Retrieve submitted reviews from localStorage on component mount
    const savedReviews = JSON.parse(localStorage.getItem('submittedReviews'));
    if (savedReviews) {
      setSubmittedReviews(savedReviews.slice(-5)); // Display the latest 5 reviews
    }
  }, []);

  useEffect(() => {
    // Save submitted reviews to localStorage whenever it changes
    localStorage.setItem('submittedReviews', JSON.stringify(submittedReviews));
  }, [submittedReviews]);

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

  return (
    <div className='ReviewFormContainer'>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', marginBottom: '20px', fontFamily: 'cursive', /* Use Roboto font style */
  fontSize: '25px', /* Adjust font size as needed */
  color: 'olive' }}>Testimonials</h2>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'goldenrod', fontFamily: 'cursive' }}>What Our Clients say</h2>
      {/* Display submitted reviews */}
      <div className="ReviewCardsContainer" style={{ textAlign: 'center' }}>
        {submittedReviews
          .filter(review => review.rating >= 4) // Filter reviews with 4 or 5 stars
          .map((review, index) => (
            <div
              key={index}
              className="ReviewCard"
              style={{
                width: '200px',
                height: '150px',
                borderRadius: '8px',
                padding: '8px',
                marginRight: '20px', // Add margin right for spacing between cards
                display: 'inline-grid',
                boxShadow :'0 8px 16px rgba(218, 165, 32, 0.2)',
                position: 'relative', // Add relative positioning
                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', // Add transition effect
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'; // Scale up on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset scale on mouse leave
              }}
            >
              <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0', marginBottom: '5px', textAlign: 'center' }}>
                {review.name}
              </p>
              <p style={{ marginBottom: '40%', textAlign: 'left', paddingLeft: '10px', fontStyle:'italic' }}>---- "{review.review}"</p>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <StarRating rating={review.rating} onRatingChange={() => {}} starColor="black" /> {/* Pass starColor prop */}
              </div>
            </div>
          ))}
      </div>
      <br/>
      <br/>
      <br/>

      <div className='ReviewForm' style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px', fontFamily: 'cursive' }}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box',  borderRadius: '20px' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px', fontFamily: 'cursive' }}>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '20px' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px', fontFamily: 'cursive' }}>
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
