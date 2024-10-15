import React, { useState } from 'react';
import './Addmovie.css';
import axios from 'axios';

const AddMovie = () => {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    director: "",
    writer: "",
    star: ""
  });

  const [movieCard, setMovieCard] = useState(null);

  const handleInputChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      [e.target.name]: e.target.value
    });
  };

  const OnImage = (e) => {
    try {
      setMovieCard(e.target.files[0]);
      console.log(e.target.files[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleMovie = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("image", movieCard);
      formData.append("title", movieDetails.title);
      formData.append("director", movieDetails.director);
      formData.append("writer", movieDetails.writer);
      formData.append("star", movieDetails.star);

      const response = await axios.post(
        'http://localhost:3001/admin/addMovie',
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className='container add-movie-form' onSubmit={HandleMovie}>
        <label htmlFor="title">Movie title</label>
        <input
          type="text"
          id='title'
          name='title'
          value={movieDetails.title}
          onChange={handleInputChange}
          className='input-field'
        /><br />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          id='director'
          name='director'
          value={movieDetails.director}
          onChange={handleInputChange}
          className='input-field'
        /><br />
        <label htmlFor="writer">Writer</label>
        <input
          type="text"
          id='writer'
          name='writer'
          value={movieDetails.writer}
          onChange={handleInputChange}
          className='input-field'
        /><br />
        <label htmlFor="star">Star</label>
        <input
          type="text"
          id='star'
          name='star'
          value={movieDetails.star}
          onChange={handleInputChange}
          className='input-field'
        /><br />
        <label htmlFor="moviecard">Movie Card</label>
        <input
          type="file"
          id='image'
          name='image'
          onChange={OnImage}
          className='input-field'
        />
        <div className='button'>
          <input type="submit" value="Add movie" />
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
