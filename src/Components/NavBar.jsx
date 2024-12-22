import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { PiGraduationCap } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
    const [size, setSize] = useState(false);
    const [icon, setIcon] = useState(true);
    const [active, setActive] = useState(false)

    const handleActivity = () => {
        setActive(true)
    }
   

    const handleMenuClick = () => {
       setIcon((prevIcon) => !prevIcon);
       
    }

    const closeMobileMenue = () => {
        setIcon(true)
    }
   

    
    const checkPageSize = () => {
        if(window.innerWidth <= 1060) {
            setSize(true)
        } else {
            setSize(false);
        }

        if(window.innerWidth > 1060) {
            setIcon(true)
        }
    }

    useEffect(() => {
        checkPageSize()
       
    }, []); 

    window.addEventListener('resize', checkPageSize);


  return (
    <>
      <nav className='nav-bar'>
        <div className="navbar-container">
            <Link to='/' className='freeton-logo' onClick={closeMobileMenue}>
            <PiGraduationCap className='freeton-logo-cap'/> <div className="freeton-logo-text"> THE UNIVERSITY <br/> OF FREETON <small>Argentina</small> </div>
            </Link>
                <div className="nav-items">

                    <div className={!icon ? 'nav-links' : 'nav-links-active'}>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                            <Link to='/admissions' onClick={closeMobileMenue} className='nav-item' >Admissions</Link>
                        </div>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                        <Link to='/about' className='nav-item' onClick={closeMobileMenue}>About</Link>
                        </div>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                        <Link to='/study' className='nav-item' onClick={closeMobileMenue}>Study</Link>
                        </div>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                        <Link to='/research' className='nav-item' onClick={closeMobileMenue}>Research</Link>
                        </div>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                        <Link to='/events' className='nav-item' onClick={closeMobileMenue}>News & Events</Link>
                        </div>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                        <Link to='/faqs' className='nav-item' onClick={closeMobileMenue}>FAQs</Link>
                        </div>
                        <div className={size ? 'mobile-link' : 'nav-link'}>
                        <Link to='/contact' className='nav-item' onClick={closeMobileMenue}>Contact Us</Link>
                        </div>
                    </div>

                    <div className="menu-icons">
                    <div className="search-items">
                        <div className={size ? 'searchIcon' : 'no-menu-bar'}>
                        <FaSearch className='sized-search' onClick={closeMobileMenue}/>
                        </div>
                        <div className={!size ? 'search-area' : 'no-menu-bar'}>
                            <textarea name="search" id="search" placeholder='Search'/>
                        </div>
                    </div>
                     <div className={size ? 'menu-bar' : 'no-menu-bar'} onClick={handleMenuClick}>{icon ? < IoMdMenu /> : < IoMdClose /> }
                     </div>
                     </div>
                    
                </div>
            
        </div>
      </nav>
    </>
  )
}

export default NavBar
