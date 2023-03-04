import React from 'react'
import { Link } from 'react-router-dom'
import "./CategoryCard.scss"

const CategoryCard = ({item}) => {
  return (
    <Link to="/gigs?category=design">
    <div className='categoryCard'>
      <img src={item.img} alt="" />
      <span className='desc'>{item.desc}</span>
      <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CategoryCard