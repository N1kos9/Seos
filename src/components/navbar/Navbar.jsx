// AiOutlineMenu
import './NavbarStyle.css'
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from 'react';


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };


  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (<>
  
    <header>
      <a href=""className="logo" ><img src="/logo.webp" alt="" /></a>

      { (toggleMenu || screenWidth > 1000) && (

      <ul className="navmenu">
        <li><a href="" className="active">Home</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Pages</a></li>
      </ul>)}

    <div className="menu-icon"><AiOutlineMenu onClick={toggleNav} /></div>

    </header>

  </>
    
  )
}

export default Navbar