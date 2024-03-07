import React from 'react'
import './Hero.css'
import arrow from '../../assets/img/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>We Ensure education for a better world</h1>
            <p>Our cutting-edge curriculam is design to empower students with the knowlade, skills, and experience needed to excel in the dynamic field of education</p>
            <button className='btn'> Explore More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero