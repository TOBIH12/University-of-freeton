import React from 'react'
import './../../App.css'
import './Section1.css'
import './Section4.css'
import './Section7.css'
import Ellipse1 from './../../assets/images/Ellipse3.png'
import Ellipse2 from './../../assets/images/Ellipse4.png'
import Ellipse3 from './../../assets/images/Ellipse5.png'
import Ellipse4 from './../../assets/images/Ellipse6.png'

const Section7 = () => {

    const reviews = [
        {
            image: Ellipse1,
            name: 'Strobe Lilian',
            department: 'Industrial Physicist',
            writeup: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est aliquam optio consequuntur harum eum architecto.'
        },
        {
            image: Ellipse2,
            name: 'Robin Matthew',
            department: 'Medicine',
            writeup: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est aliquam optio consequuntur harum eum architecto.'
        },
        {
            image: Ellipse3,
            name: 'Silly Mark',
            department: 'Chemistry',
            writeup: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est aliquam optio consequuntur harum eum architecto.'
        },
        {
            image: Ellipse4,
            name: 'Michelle Davis',
            department: 'Industrial Physicist',
            writeup: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est aliquam optio consequuntur harum eum architecto.'
        },
    ]


  return (
    <section className='news-section'>
      <h1 className="section-title">Students Reviews</h1>
      <p className='section-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam! Error <br />ullam repellendus consequuntur. Ea quis labore earum rerum laborum <br /> praesentium repellendus placeat.</p>

        <div className="review-cards">
            {reviews.map((review) => (
                <div className="review-item">
                    <img src={review.image} alt="Freeton student" />
                    <h2>{review.name}</h2>
                    <p className="time small">{review.department}</p>
                    <p className="writeup">{review.writeup}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Section7
