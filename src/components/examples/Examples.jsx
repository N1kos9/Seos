import './ExamplesStyle.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Examples() {
    useEffect(()=>{
        Aos.init({duration: 1000})
      }, []);
  return (<>
  
    <main className='main-examples'>
        <h1 className='examples-title'>Visit Some Of Our Awsome Stuffs</h1>
        <div className='exampless'>
            <div className='example-1' data-aos='fade-down'>
                <img src="/example-4.webp" alt="" />
                <div className='text-area'>
                <h3>dmco.net</h3>
                <p>Email Marketing</p>
                </div>
            </div>
            <div className='example-2' data-aos='fade-up'>
                <img src="/example-2.webp" alt="" />
                <h3>dmcal.co</h3>
                <p>Email Marketing</p>
            </div>
            <div className='example-3' data-aos='fade-down'>
                <img src="/example-1.webp" alt="" />
                <h3>citmv.com</h3>
                <p>Email Marketing</p>
            </div>
            <div className='example-4' data-aos='fade-up'>
                <img src="/example-3.webp" alt="" />
                <h3>mvsp.net</h3>
                <p>Email Marketing</p>
            </div>
        </div>
    </main>

  </>
  )
}

export default Examples