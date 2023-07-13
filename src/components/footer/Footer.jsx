import './FooterStyle.css'

function Footer() {
  return (
    <section className='footer-section'> 
      <div className='footer-columns'>
        <div className='footer-item footer-item-1'>
          <img className='end-logo' src="/logo.webp" alt="" />
          <p className='addres-1'> 58 W. Belmont Ave. West New York, NJ 07093</p>
          <p>info@yourdomain.com</p>
          <div className='social-icons'>
            <img src="/facebook.png" alt="" />
            <img src="/twitter.png" alt="" />
            <img src="/tik-tok.png" alt="" />
            <img src="/globe.png" alt="" />
          </div>
        </div>
        <div className='footer-item footer-item-2'>
          <h2>Quick Links</h2>
          <p className='start'>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className='footer-item footer-item-3'>
          <h2>Support</h2>
          <p className='start'>Privacy Policy</p>
          <p> Terms & Conditions</p>
          <p>Sitemap</p>
          <p>FAQs</p>
          <p>Seport a bug</p>
        </div>
        <div className='footer-item footer-item-4'>
          <h2>Core Features</h2>
          <p className='start'>Email Marketing</p>
          <p>SEO</p>
          <p>Social Media Marketing</p>
          <p>Lead generation</p>
          <p>24/7 Support</p>
        </div>
      </div>
      <h1 className='signature'>Made by <span className='strong'>Nikos</span></h1>
    </section>
  )
}

export default Footer