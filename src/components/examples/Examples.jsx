import './ExamplesStyle.css'

function Examples() {
  return (<>
  
    <main className='main-examples'>
        <h1 className='examples-title'>Visit Some Of Our Awsome Stuffs</h1>
        <div className='exampless'>
            <div className='example-1'>
                <img src="/example-4.webp" alt="" />
                <div className='text-area'>
                <h3>dmco.net</h3>
                <p>Email Marketing</p>
                </div>
            </div>
            <div className='example-2'>
                <img src="/example-2.webp" alt="" />
                <h3>dmcal.co</h3>
                <p>Email Marketing</p>
            </div>
            <div className='example-3'>
                <img src="/example-1.webp" alt="" />
                <h3>citmv.com</h3>
                <p>Email Marketing</p>
            </div>
            <div className='example-4'>
                <img src="/example-3.webp" alt="" />
                <h3>mvsp.net</h3>
                <p>Email Marketing</p>
            </div>
        </div>
    </main>

  </>
  )
}

export default Examples