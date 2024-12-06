import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';

const Carousels = () => {
  const navigate = useNavigate()
  const [movieImage, setMovieImage] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/getmovies');
        setMovieImage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className='carousel'>
      <Carousel>
        {movieImage.map((image) => (
          <Carousel.Item key={image._id}>
            <img
              src={`http://localhost:3001/uploads/${image.image}`}
              width={'100%'}
              alt={image.title}
              onClick={() => navigate(`/moviedetails/${image._id}`)}
            />
            <Carousel.Caption>
              <span className='movie-name'>{image.title}</span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
