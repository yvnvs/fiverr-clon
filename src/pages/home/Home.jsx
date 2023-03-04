import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cards } from "../../data";
import "./Home.scss"
const Home = () => {
  return (
    <div>
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide slidesToShow={5} arrowsScroll={5}>{cards.map((card)=>(
        <CategoryCard key={card.id} item={card}></CategoryCard>
      ))}</Slide>
    </div>
  )
}

export default Home