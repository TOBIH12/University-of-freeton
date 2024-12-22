import React from 'react'
import './App.css'
import { BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Admissions from './Components/Admissions'
import About from './Components/About'
import Study from './Components/Study'
import Research from './Components/Research'
import Events from './Components/Events'

const App = () => {
  return (
    <>
     <Router>
      <NavBar />
      <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/admissions' element={ <Admissions /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/study' element={ <Study /> } />
      <Route path='/research' element={ <Research /> } />
      <Route path='/events' element={ <Events /> } />

      </Routes>
     </Router>
    </>
  )
}

export default App
