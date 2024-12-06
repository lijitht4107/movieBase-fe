import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css';
import Rating from '../src/components/Rating'

const MovieDetails = () => {
  const { id } = useParams();
  const [onMovie, setOnMovie] = useState(null); // Set initial value to null
  const [ratings, setRatings] = useState([]);
  const [openRating, setOpenRating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/admin/onmovie/${id}`);
      const { movie, ratings } = response.data;
      console.log(movie, ratings);
      setOnMovie(movie);
      setRatings(ratings);
    } catch (error) {
      console.log("Error fetching movie details:", error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'filled-star' : 'empty-star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Calculate average rating from ratings array
  const averageRating = ratings.length > 0 
    ? ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length 
    : 0;

  return (
    <div>
      <div className='sub-nav'>
      <button className="back-button" onClick={() => navigate('/home')}>Back</button>
      <button className='add-rating' onClick={() => setOpenRating(true)}>Add Rating</button>
      </div>
      
      <div className="container movie-container">
        {onMovie ? (
          <div className="onmovieheader">
            <img src={`http://localhost:3001/uploads/${onMovie.image}`} alt={onMovie.title} />
            <div>
              <h3>{onMovie.title}</h3>
              <p>Stars: {onMovie.star}</p>
              <p>Director: {onMovie.director}</p>
              <p>Writer: {onMovie.writer}</p>
            </div>
            <div className="rating">
              {renderStars(Math.round(averageRating))}
              <p>Average Rating: {averageRating.toFixed(1)} / 10</p>
            </div>
            
          </div>
        ) : (
          <p>Loading movie details...</p>
        )}
        
        {openRating && <Rating movieId={id} onClose={() => setOpenRating(false)} />}
      </div>
      
    </div>
  );
};

export default MovieDetails;
