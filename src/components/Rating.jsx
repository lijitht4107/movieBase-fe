import React, { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import {CircleX} from 'lucide-react'
import {jwtDecode} from 'jwt-decode'
import './Rating.css';  // Add your styles here

const Rating = ({ movieId,onClose }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const openRef = useRef();
  const CloseRating = (e)=>{
    if(openRef.current === e.target){
      onClose();
    }
  }
  const submitRating = async (ratingValue) => {
    const token = localStorage.getItem('token');
    const decodeToken = jwtDecode(token);
    console.log(decodeToken.userId);

    
    try {
      const response = await axios.post(`http://localhost:3001/api/ratings/${movieId}`, {
        rating: ratingValue,
        userId : decodeToken.userId
      });

      console.log(response.data);
      if(response.data.message === "new rating is added"){
        onClose()
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <div ref={openRef} onClick={CloseRating} className="star-rating bg bg-dark px-5 py5">
      <button onClick={onClose}><CircleX /></button>
      {[...Array(10)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                submitRating(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      
    </div>
  );
};

export default Rating;
