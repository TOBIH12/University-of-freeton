import React from 'react'
import './../../App.css';
import './Section1.css';
import './Section4.css';
import './Section6.css'
import { Link } from 'react-router-dom';


const Section6 = () => {

    const events = [
        {
            date: '17',
            month: 'SEP',
            year: '2022',
            title: 'Fintech & Key Investment Conference',
            time: '1:00 pm - 2:00 pm Freeton Grand Hall'
        },
        {
            date: '20',
            month: 'NOV',
            year: '2022',
            title: 'International Conference on Biomolecular Engineering',
             time: '1:00 pm - 2:00 pm Freeton Grand Hall'
        },
        {
            date: '14',
            month: 'JAN',
            year: '2023',
            title: 'Digital Art - a future for the film industry',
             time: '1:00 pm - 2:00 pm Freeton Grand Hall'
        },
    ]

  return (
    <section className='news-section'>
      <h1 className="section-title space">Upcoming Events</h1>
      <div className="cards-section">
        {events.map((events) => (
                <div className="card-items second">
                    <div className="card-dates">
                        <h3>{events.date}</h3>
                        <h3 className="month">{events.month}</h3>
                        <p className="time">{events.year}</p>
                    </div>
                    <div className="card-texts">
                        <h2>{events.title}</h2>
                        <p className="time">{events.time}</p>
                    </div>
                </div>
        ))}
        <Link to='/events'>
    <button className='btn-secondary view'>View All Events</button>
    </Link>
      </div>
    </section>
  )
}

export default Section6
