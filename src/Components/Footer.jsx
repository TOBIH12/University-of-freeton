import React from 'react'
import './../App.css'
import './HomeSections/Section7.css'
import './Footer.css'
import { Link } from 'react-router-dom' 
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="email-section">
        <h1>To Get the Latest & Updated News <br /> Subscribe to Our Newletters</h1>
        <form action="email">
           <input type="email" id='email' placeholder='Enter your email' />
            <Link to='/contact'>
            <button className='btn-secondary email-btn'>Subscribe</button>
            </Link>
        </form>
      </div>
      <div className="credits-section">
        <div className="credits">
        <h1>Our Address</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Voluptate minus numquam commodi obcaecati minima <br /> officia eos esse consequatur quaerat? Quisquam rerum <br /> amet sapiente.</p>
        <div className="social-icons">
        <FaSquareXTwitter className='icons flex' />
        <FaFacebook className='icons flex'/>
        <IoLogoInstagram className='icons flex'/>
        <FaLinkedin className='icons flex'/>
        </div>
        </div>
        <div className="credits">
        <h1>About</h1>
        <div className="links">
          <Link to='/about' className='link'>
          <li>Brief History</li>
          </Link>
          <Link to='/about' className='link'>
          <li>Vision & Mission</li>
          </Link>
          <Link to='/about' className='link'>
          <li>Accreditation</li>
          </Link>
          <Link to='/about' className='link'>
          <li>International Recognition</li>
          </Link>
          <Link to='/about' className='link'>
          <li>Facts about Freeton</li>
          </Link>
        </div>
        </div>

        <div className="credits">
          <h1>News & Updates</h1>
        <div className="links">
          <Link to='/events' className='link'>
          <li>Technology</li>
          </Link>
          <Link to='/events' className='link'>
          <li>News</li>
          </Link>
          <Link to='/events' className='link'>
          <li>Work Life</li>
          </Link>
          <Link to='/events' className='link'>
          <li>Podcast</li>
          </Link>
          <Link to='/events' className='link'>
          <li>Improve Skills</li>
          </Link>
        </div>
        </div>

        <div className="credits">
          <h1>Contact Us</h1>
        <div className="links">
          <div className="work">
        <FaPhoneAlt className='icons'/> <li>+234 9158877369</li>
        </div>
        <div className="work">
        <CiMail className='icons'/> <li>ayomikunbolaji043@gmail.com</li>
        </div>
        <div className="work">
        <TfiWorld className='icons'/> <li>http://www.freeton,edu</li>
        </div>
        <div className="work">
        <MdOutlineLocationOn className='icons'/> <li>Seawave island, Dhaka-1672, Argentina</li>
        </div>
        </div>
        </div>
        
        
        
      </div>
      <div className="copyright-section">
          <h1>Copyright The University of Freeton. All rights reserved</h1>
      </div>
    </div>
  )
}

export default Footer
