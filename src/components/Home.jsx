import React, { useEffect} from 'react'
import './Home.css'
import Footer from './Footer'
import School6 from '../image/School6.jpg'
import { useNavigate } from "react-router-dom";
import aos from 'aos'
import 'aos/dist/aos.css'

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
        <div style={{textAlign: 'center', padding: '40px'}}>
          <img data-aos="fade-down" className='school-image' src={School6} alt="School6"/> <br /> <br />
          <h1 data-aos="fade-up">Welcome to Star Kids</h1> <br />
          <h5 data-aos="fade-up">Join us and watch your child grow!</h5> <br />

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
