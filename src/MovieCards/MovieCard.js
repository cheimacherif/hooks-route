import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'


function MovieCard({elm , deleteMov}) {
const handleDelete=()=>{
    deleteMov(elm.id)}

    console.log(elm)
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Link to={`/Description/${elm.id}`}><Card.Img variant="top" src={elm.image}  style={{ width:'18rem', height:'150px' }}/>
    </Link>
      <Card.Body>
        <Card.Title>{elm.title}</Card.Title>
        <Card.Text>
          {elm.description}
        </Card.Text>
        <StarRatingComponent 
          name="star" 
          editing={false}
          value={elm.Rate}
        />
        <Button variant="primary"  onClick={handleDelete}>delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard