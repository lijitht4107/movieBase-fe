import React, { useEffect, useState } from 'react';
import './MovieCards.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MovieRating from './Rating/AveRating';  // Import the MovieRating component
import AxiosInstance from '../config/AxiosInstants';

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
    // const movieRatingFetch = async()=>{
    //   try {
    //    const ratingResponse = await AxiosInstance.get('rating/')
    //    }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    
    fetchMovies();
  }, []);

  return (
    <div className="movie-cards-container">
      
      {movies.map((movie) => {
        // console.log(movie._id, "movie id");
        return(
        
          <div key={movie._id} className="card">
            <img 
              src={`http://localhost:3001/uploads/${movie.image}`} 
              alt={movie.title} 
              className="movie-image" 
            />
            <div className='movie-details'>
            <h4 className="movie-title">{movie.title}</h4>
            <p>Actor: {movie.star}</p>
  
            {/* Display the average rating using MovieRating component */}
            <p>Average Rating: <MovieRating movieId={movie._id}  /></p>
            
            </div>
            
            <button 
              className="btn btn-primary" 
              onClick={() => navigate(`/moviedetails/${movie._id}`)}
            >
              Movie Dash_
            </button>
          </div>
        )
      }
      )}
    </div>
  );
};

export default MovieCards;
