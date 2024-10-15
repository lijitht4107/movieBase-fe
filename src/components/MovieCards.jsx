import React, { useEffect, useState } from 'react';
import './MovieCards.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/getmovies');
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-cards-container">
      {movies.map((movie) => (
        <div key={movie._id} className="card">
          <img src={`https://localhost:3001/uploads${movie[0]?.image}`} alt={movie.title} className="movie-image" />
          <h4 className="movie-title">{movie.title}</h4>
          <p className="movie-star">Star: {movie.star}</p>
          <button className="btn btn-primary" onClick={()=>navigate(`/moviedetails/${movie._id}`)}>View more</button>
        </div>
      ))}
      
    </div>
  );
};

export default MovieCards;
