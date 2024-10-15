import React from 'react'
import Carousels from '../src/components/Carousel'
import MovieCards from '../src/components/MovieCards'
import axios from 'axios'

const Home = () => {
  const getMovies = axios.get('http://localhost:3001/admin/getmovies')
  console.log(getMovies.data);
  
  return (
    <div >
        <Carousels/>
        
        Recently released Movies
        <MovieCards/>

    </div>
  )
}

export default Home
