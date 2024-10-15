import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './MovieDetails.css'
import Rating from '../src/components/Rating'

const MovieDetails = () => {

    const {id} = useParams()
    const [onMovie, setOnMovie] = useState('')
    const [openRating, setOpenRating] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
       OnImage(id)
       
    },[id])
const OnImage =async(id)=>{
    try {
        const response = await axios.get(`http://localhost:3001/admin/onmovie/${id}`)
        const movie = response.data;
        console.log(movie);
        setOnMovie(movie)
        
        
    } catch (error) {
        console.log("ooooh",error);
        
    }
}
  return (
    <div className='container'>
      <div className='onmovieheader'>
        <h3 >{onMovie.title}</h3>
        {openRating  && <Rating movieId={id} onClose={()=>setOpenRating(false)}/>}
        <span onClick={()=>setOpenRating(true)}>rating</span>
      </div>
    </div>
  )
}

export default MovieDetails
