import React, { useEffect} from 'react'
import './Home.css'
import Footer from './Footer'
import School6 from '../image/School6.jpg'
import { useNavigate } from "react-router-dom";
import aos from 'aos'
import 'aos/dist/aos.css'
import School1 from '../video/School1.mp4'

function Home() {
  
  useEffect(()=>{
    aos.init({
      duration: 1000,
      once: false
    })
  })

  const navigate = useNavigate();
  return (
    <div>
        <div container-fluid home-section px-3 style={{textAlign: 'center', padding: '20px 15px'}}>
          <img data-aos="fade-down" className='school-image' src={School6} alt="School6"/> <br /> <br />
          <h1 data-aos="fade-up">Welcome to Star Kids</h1> <br />
          <h5 data-aos="fade-up">Join us and watch your child grow!</h5> <br />

          <video  width="500px" height="360px" controls autoPlay
  loop data-aos="fade-up">
            <source src={School1} type='video/mp4' />
          </video>

          <button data-aos="fade-up"
        className="ViewMore"
        onClick={() => navigate("/about")}
      >
        Welcome
      </button>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home
