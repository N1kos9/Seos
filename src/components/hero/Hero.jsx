import './HeroStyle.css'


function Hero() {
  return (
    <section className="main">
      <div className="text">
        <h1>We Collect <br /> High Quality Leads</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        Quis ipsum suspendisse ultrices gravi.</p>
        <a href="/" className="btn">Contact us</a>
      </div>
      <div className="main-img">
        <img src="/item-1.svg" alt="" />
      </div>
    </section>
  )
}

export default Hero