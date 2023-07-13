import { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../../animation/animation';

function Preloader() {

  useEffect(()=> {
    preLoaderAnim()
  }, []);

  return (<>
  <div className="preloader">
    <div className="texts-container">
      <span>Welcome</span>
      <span>To</span>
      <span>Seos.</span>
    </div>
  </div>
  
  </>
  )
}

export default Preloader