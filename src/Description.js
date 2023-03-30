import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Description = ({movie}) => {
const {id} =useParams()
const mov =movie.find((e)=>e.id===id)
  return (
    <div>
        
           <h1>{mov.title}</h1>
        <h6> {mov.description} </h6>
        
        <iframe width="560" height="315" src={mov.link} title="YouTube video player" allowFullScreen></iframe>
        <Link to ='/' >< button className='button' >Back</button></Link>

    </div>



  )
}

export default Description