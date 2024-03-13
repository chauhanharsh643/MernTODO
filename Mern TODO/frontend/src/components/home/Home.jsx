import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>
            Organize your day, boost productivity, <br/>and accomplish more with our intuitive todo platform. <br/>
            </h1>
            <h3>
            Start planning your success today!<br/>
            </h3>
            <button type="button">Make Todo list</button>
        </div>
    </div>
  )
}

export default Home