import React from 'react'
import './../../App.css';
import './Section1.css';
import './Section4.css';
import './Section5.css';
import { Link } from 'react-router-dom';

const Section5 = () => {
  return (
    <section className='apply-section'>
      <div className="section-writeups">
        <h1>Apply For Admission</h1>
        <h3>Fall 2022 applications are now open</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis <br /> aut impedit praesentium perspiciatis nesciunt dicta aspernatur, <br /> odio laudantium non repellat, iusto eos. Culpa hic tenetur minima <br /> maxime sit mollitia cupiditate.</p>

        <Link to='/admissions'>
        <button className='btn-primary'>Apply</button>
        </Link>
      </div>
    </section>
  )
}

export default Section5
