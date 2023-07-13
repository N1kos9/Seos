import './Section.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MiddleSection() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  }, []);
  return (
    <section className="section-1">
      <div className="second-element" data-aos='fade-down-right'>
        <img src="/item-2.svg" alt="" />
      </div>
      <div className='text-2' data-aos='fade-up-left'>
        <h1>We Create a Steps to Build a Successful Digital Product</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis orem ipsum dolor sit
          amet, consectetur adipiscing.</p>
          <a href="/">Contact Us</a>
      </div>
    </section>
  )
}

export default MiddleSection