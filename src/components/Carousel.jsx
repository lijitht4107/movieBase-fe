import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Movie from '../assets/movie.jpg';
import './Carousel.css'

const Carousels = () => {
  return (
    <div className='carousel' >
       <Carousel>
      <Carousel.Item>
      <img src={Movie} width={'100%'} alt="" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Movie} width={'100%'}  alt="" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Movie} width={'100%'} alt="" text="Second slide" />
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Carousels
