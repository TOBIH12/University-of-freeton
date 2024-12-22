import React from 'react';
import './../../App.css';
import './Section1.css';
import './Section4.css';
import { Link } from 'react-router-dom';
import Frame1 from './../../assets/images/Frame1.png';
import Frame2 from './../../assets/images/Frame2.png';
import Frame3 from './../../assets/images/Frame3.png';

const Section4 = () => {

    const cards = [
        {
            'image': Frame1,
            'description': 'Seven Freeton academics elected British Academy Fellows',
            'link': 'Read More',
            'date': '22 July 2022'
        },
        {
            'image': Frame2,
            'description': 'The researchers at Freeton helps create the most complete polygenic tree',
            'link': 'Read More',
            'date': '22 July 2022'
        },
        {
            'image': Frame3,
            'description': 'A global MBA from the next generation of business leaders',
            'link': 'Read More',
            'date': '22 July 2022'
        }
    ]

  return (
    <section className='news-section'>
    <h1 className="section-title space">News and Updates</h1>
    <div className='cards-section'>
     {cards.map((card) => (
        <div className="card-items">
            <img src={card.image} alt="Something's supposed to be here.." />
            <h2>{card.description}</h2>
            <Link to='/events' className='link'>
                {card.link}
            </Link>
            <p>{card.date}</p>
        </div>
     ))}
    </div>

    <Link to='/events'>
    <button className='btn-secondary view'>View More</button>
    </Link>
    </section>
  )
}

export default Section4
