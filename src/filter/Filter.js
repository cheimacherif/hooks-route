import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({rateMov}) => {
  return (
    <div>
<StarRatingComponent
    name='star' /* name of the radio input, it is required */
    onStarClick={(value)=>rateMov(value)} /* on icon click handler */
    starColor='#ffb400' /* color of selected icons, default `#ffb400` */
    emptyStarColor='grey' /* color of non-selected icons, default `#333` */
    />
    </div>
  )
}

export default Filter