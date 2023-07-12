import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/Navbar.jsx'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import MiddleSection from './components/middle-section/MiddleSection.jsx'
import Methods from './components/methods/Methods.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Header />
    <MiddleSection />  
    <Methods />
    <Footer />
  </React.StrictMode>,
)
