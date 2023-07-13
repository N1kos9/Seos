import './HeaderStyle.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);

  return (
    <section>
    <div className="main-2">
      <div className='header-main-text-position'>
      <h1 className='title'>What We Will Do For Your Business</h1>
      </div>
      <div className='list-of-items'>
        <div className="item-1" data-aos='fade-down' data-aos-once="true">
          <img src="/tasks.png" alt="" />
          <h1>Link building</h1>
          <p>Hunky dory barney fanny around up 
          the duff no biggie loo cup of tea 
          jolly good ruddy say arse!</p>
          <a href="/"><span><AiOutlineArrowRight /></span>get started</a>
        </div>
        <div className="item-2" data-aos='fade-up' data-aos-once="true">
          <img src="social-marketing.png" alt="" />
          <h1>Content marketing</h1>
          <p>Hunky dory barney fanny around up 
          the duff no biggie loo cup of tea 
          jolly good ruddy say arse!</p>
          <a className='active-btn' href="/"><span><AiOutlineArrowRight /></span>get started</a>
        </div>
        <div className="item-3" data-aos='fade-down' data-aos-once="true">
          <img src="/on-page.png" alt="" />
          <h1>On Page SEO</h1>
          <p>Hunky dory barney fanny around up
          the duff no biggie loo cup of tea 
          jolly good ruddy say arse!</p>
          <a href="/"><span><AiOutlineArrowRight className='arrow' /></span>get started</a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Header