import './MethodsStyle.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Methods() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  }, []);
  return ( <>
    <section className='section-3'>
      <div className='main-text-position'>
      <h1 className='main-text-2'>Generating New Customers Via Online Mode​​</h1>
      </div>
      <div className='solutions'>
        <div className='solution-1' data-aos='fade-right'>
          <div className='icon icon-1'>
            <img src="/chart.png" alt="" />
          </div>
          <div className='text-div'>
          <h2>All Sizes Business</h2>
          <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun se ultrices gravida.</p>
          </div>
        </div>
        <div className='solution-2' data-aos='fade-left'>
          <div className='icon icon-2'>
            <img src="/social-media.png" alt="" />
          </div>
          <div className='text-div'>
          <h2>Awesome Results</h2>
          <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun se ultrices gravida.</p>
          </div>
        </div>
        <div className='solution-3' data-aos='fade-right'>
          <div className='icon icon-3'>
            <img src="/speaker.png" alt="" />
          </div>
          <div className='text-div'>
          <h2>Keep you in the Loop</h2>
          <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun se ultrices gravida.</p>
         </div>
        </div>
        <div className='solution-4' data-aos='fade-left'>
          <div className='icon icon-4'>
            <img src="/growth.png" alt="" />
          </div>
          <div className='text-div'>
          <h2>Significant ROI</h2>
          <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun se ultrices gravida.</p>
          </div>
        </div>
      </div>
</section>
  </>)
}

export default Methods