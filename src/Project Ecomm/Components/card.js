import { useState } from 'react'
import './card.css'
import {Link} from 'react-router-dom'

const Card = ({item,handleClick}) => {
  const[open,setOpen]=useState(false)
    const {title,price,image,description,rating,id}=item
  return (
    <div className='Card'>
      <Link to={`/about/${id}`}><img src={image} alt="" height={'200px'} width={'200px'}/></Link>
      <h5>{title}</h5>
      <p>{price}</p>
      <p>{rating.rate}⭐</p>
      <br />
      <button className='addcart' onClick={()=>handleClick(item)}>Add Cart</button>
      <button className='readmore' onClick={()=>setOpen(!open)}>Read More</button>
      {open && (
        <div>
          <p>{description}</p>
          <button onClick={()=>setOpen(!open)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Card