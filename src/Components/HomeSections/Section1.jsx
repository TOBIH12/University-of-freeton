import React from 'react'
import './../../App.css'
import './Section1.css'
import { Link } from 'react-router-dom'
import  Video  from './../../assets/video/video-2.mp4'


const Section1 = () => {
  return (
    <section className='section'>
        <div className="left-section">
            <h1 className='section-title'>About Freeton</h1>
                <h3>World Class Knowledge</h3>
                <p className="section-texts">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facere qui exercit <br /> ationem autem vel ipsum totam recusandae. 
                </p>
                <p className="section-texts p2">
                Sunt nam ut ipsa et vitae magnam.

                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Tenetur enim, minus officia impedit quae quam natus aperiam sapiente assumenda <br /> fugiat, corrupti doloribus nobis placeat saepe. Dolores cum enim ut itaque.
                </p>
                <Link to='/about'>
                <button className='btn-secondary'>Read More</button>
                </Link>
        </div>
        <div className="right-section">
          <video src={Video} muted loop autoPlay />
           
        </div>
      
    </section>
  )
}

export default Section1
