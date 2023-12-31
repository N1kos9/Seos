import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/Navbar.jsx'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import MiddleSection from './components/middle-section/MiddleSection.jsx'
import Methods from './components/methods/Methods.jsx'
import Plans from './components/plans/Plans.jsx'
import Examples from './components/examples/Examples.jsx'
import Review from './components/review/Review.jsx'
import Tips from './components/tips/Tips.jsx'
import Contact from './components/contact-us/Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Header />
    <MiddleSection />  
    <Methods />
    <Plans />
    <Examples />
    <Review />
    <Tips />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
