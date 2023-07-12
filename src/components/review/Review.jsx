import './ReviewStyle.css'

function Review() {
  return (
    <main className='testimonial-area'>
        <div className='quote-item-1'>
          <div className='review-main-text-position'>
        <h1 className='review-title'>What Client Say About Us</h1>
          </div>
        </div>
        <div className='whole-profile'>
        <img className='quote-img quote' src="/quote.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisudmod tempor indicidunt <br />
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo <br />
        viverra maecenas accumsan lacus vel facilsis.</p>
        <div className='profile'> 
                <img src="/Olivia.webp" alt="" />
                <div className='profile-text'>
                <h4>Olivia James</h4>
                <p>UIX designer</p>
                </div>
        </div>
        <img className='quote-img-2 quote' src="/quote.png" alt="" />
        </div>
    </main>
  )
}

export default Review