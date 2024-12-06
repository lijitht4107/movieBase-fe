import React from 'react'
import Carousels from '../src/components/Carousel'
import MovieCards from '../src/components/MovieCards'
import axios from 'axios'
import './Home.css'

const Home = () => {
  const getMovies = axios.get('http://localhost:3001/admin/getmovies')
  console.log(getMovies.data);
  
  return (
    <div >
      <div>
      <Carousels/>
      </div>
      <div>
        <h3 className='movie-list'> Recently added movie</h3>
      </div>
      <div>
      <MovieCards/>
        </div>  
       

    </div>
  )
}

export default Home
