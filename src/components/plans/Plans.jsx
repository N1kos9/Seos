import './PlansStyle.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Plans() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      }, []);
  return (
    <section className='section-4'>
        <div className='all-in-one'>
        <h1 className='plan-title'>Choose Your Very Best Pricing Plan</h1>
        <div className='list-items-2'>
            <div className='plan-1' data-aos='fade-up'>
                <img src="/growth-2.png" alt="" />
                <h1>$ 5.00</h1>
                <p>Increase traffic 50%
                Social Media Marketing
                10 Free Optimization 
                24/7 support</p>
            </div>
            <div className='plan-2' data-aos='fade-up'>
                <img src="/award.png" alt="" />
                <h1>$ 20.00</h1>
                <p>Increase traffic 50%
                Social Media Marketing
                10 Free Optimization
                24/7 support</p>
            </div>
            <div className='plan-3' data-aos='fade-up'>
                <img src="/project.png" alt="" />
                <h1>$ 30.00</h1>
                <p>Increase traffic 50%
                Social Media Marketing
                10 Free Optimization
                24/7 support</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Plans