import './PlansStyle.css'

function Plans() {
  return (
    <section className='section-4'>
        <div className='all-in-one'>
        <h1 className='plan-title'>Choose Your Very Best <br /> Pricing Plan</h1>
        <div className='list-items-2'>
            <div className='plan-1'>
                <img src="/growth-2.png" alt="" />
                <h1>$ 5.00</h1>
                <p>Increase traffic 50%; <br />
                Social Media Marketing; <br />
                10 Free Optimization; <br />
                24/7 support</p>
            </div>
            <div className='plan-2'>
                <img src="/award.png" alt="" />
                <h1>$ 20.00</h1>
                <p>Increase traffic 50%; <br />
                Social Media Marketing; <br />
                10 Free Optimization; <br />
                24/7 support</p>
            </div>
            <div className='plan-3'>
                <img src="/project.png" alt="" />
                <h1>$ 30.00</h1>
                <p>Increase traffic 50%; <br />
                Social Media Marketing; <br />
                10 Free Optimization; <br />
                24/7 support</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Plans