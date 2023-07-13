import './TipsStyle.css'

function Tips() {
  return (
    <section className='section-5'>
        <div className='main-text-tips-area'> 
        <h1 className='main-text-tips'>Tips and Tricks From Our Exparts</h1>
        </div>
        <div className='tips'>
            <div className='tip-1'>
                <img src="/trick-1.webp" alt="" />
                <h1>Twice profit than before you ever got</h1>
                <div className='continue'>
                <a href=""><span></span>Continue Reading</a>
                </div>
                <a href="" className='date'>March 3, 2020</a>
            </div>
            <div className='tip-2'>
                <img src="/trick-2.webp" alt="" />
                <h1>Twice profit than before you ever got</h1>
                <div className='continue'>
                <a href=""><span></span>Continue Reading</a>
                </div>
                <a href="" className='date'>March 3, 2020</a>
                
            </div>
            <div className='tip-3'>
                <img src="/trick-3.webp" alt="" />
                <h1>Twice profit than before you ever got</h1>
                <div className='continue'> 
                <a href=""><span></span>Continue Reading</a>
                </div>
                <a href="" className='date'>March 3, 2020</a>
            </div>
        </div>
    </section>
  )
} export default Tips
