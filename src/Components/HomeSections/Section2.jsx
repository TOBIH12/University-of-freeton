import React from 'react'
import './../../App.css'
import './Section1.css'
import './Section2.css'
import { Link } from 'react-router-dom'
import Image10 from  './../../assets/images/image10.png'

const Section2 = () => {

    const statistics = [
        {'digit': '78k+',
            'text': 'Total Students'
        },

        {
            'digit': '8k+',
            'text': 'Topper Students'
        },
        {
            'digit': '706+',
            'text': 'Contributors'
        },
        {
            'digit': '85+',
            'text': 'Global Community'
        }
    ]
  return (
    <>
    <section className='section'>
      <div className="left-section">
        <h1 className="section-title">Why Choose <br /> University Of Freeton</h1>
        <p className="section-texts">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique quasi, laudantium architecto ratione vitae at. <br /> aliquam debitis quam itaque.</p>
        <Link to='/about'>
                <button className='btn-secondary'>Read More</button>
                </Link>
      </div>
      <div className="right-section girl">
        <img src={Image10} alt="A female student of Freeton smiling" />
      </div>

    </section>
     <div className="stats-section">
     {statistics.map((statistic) => (
        <div className='stats'>
        <h2>{statistic.digit}</h2>
        <p>{statistic.text}</p>
        </div>
     ))}
   </div>
   </>
  )
}

export default Section2
