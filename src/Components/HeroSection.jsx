import React from 'react'
import './../App.css'
import './HeroSection.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='hero-page'>
      <section className='hero-texts'>
        <h1>Welcome to The University <br /> Of Freeton</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, qui <br /> eligendi perspiciatis dignissimos unde minima ratione obcaecati? <br /> Voluptates possimus, consectetur, nemo laborum ipsa, incidunt dolores <br />quidem temporibus accusamus rerum nostrum.</p>
        <Link to='/about'>
        <button className='btn-primary'>Explore Now</button>
        </Link>
      </section>
    </div>
  )
}

export default HeroSection
