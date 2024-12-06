import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'
import './AveRating.css'

const MovieRating = ({ movieId }) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => { const fetchRating = async () => {
    try {
      const token = localStorage.getItem("token");
      const decodetoken = jwtDecode(token);

      if (movieId) {
        const response = await axios.post(`http://localhost:3001/api/ratings/${movieId}`,{userId:decodetoken.userId});
        setAverageRating(response.data.averageRating);
      }
    } catch (error) {
      console.error("Error fetching average rating:", error);
    }
  };

  fetchRating();
  }, [movieId]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'filled-star' : 'empty-star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars(Math.round(averageRating))}
      <p>Average Rating: {averageRating.toFixed(1)} / 5</p>
    </div>
  );
};

export default MovieRating;
