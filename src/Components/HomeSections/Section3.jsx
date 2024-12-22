import React from 'react'
import './../../App.css'
import './Section1.css'
import './Section3.css'
import { GiDiploma } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";
import { RiBookShelfLine } from "react-icons/ri";
import Video from  './../../assets/video/video-1.mp4'

const Section3 = () => {

const contents = [
    {
        'icon': <GiDiploma />,
        'title': 'Global Certificate',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt. debitis quod aliquid corrupti illo error cum rem autem quaerat.'
    },
    {
        'icon': <TfiSupport />,
        'title': 'Alumni Support',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, debitis quod aliquid corrupti illo error cum rem autem quaerat.'
    },
    {
        'icon': <RiBookShelfLine />,
        'title': 'Book & Library',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, debitis quod aliquid corrupti illo error cum rem autem quaerat.'
    }
]

  return (
    <section className='section'>
      <div className="left-section">
        <h1 className="section-title">Our Facilities</h1>
        <p className="section-texts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora incidunt blanditiis aut ipsum minima minus aperiam.</p>

       
            {contents.map((content) => (
                <div className='contents'>
                <div className="content-image">
                    {content.icon}
                    </div>
                    <div className="content-texts">
                    <h2>{content.title}</h2>
                    <p className="section-text">{content.text}</p>
                    </div>
                    </div>

            ))}
       
      </div>
      <div className="right-section">
        <video src={Video} className='my-video' autoPlay loop muted/>
      </div>
    </section>
  )
}

export default Section3
