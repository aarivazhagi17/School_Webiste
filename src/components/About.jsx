import React, { useEffect } from 'react'
import './About.css'
import Learn from '../image/Learn.jpg'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'


//about

import CraftActivities from '../image/CraftActivities.png'
import Games from '../image/Games.png'
import Quizzes from '../image/Quizzes.png'
import Footer from './Footer'

//daily activity

import Yoga from '../image/Yoga.jpg'
import Teacher_Training from '../image/Teacher_Training.jpg'
import Drawing from '../image/Drawing.jpg'
import Playing from '../image/Playing.jpg'
import Eating from '../image/Eating.jpg'
import Sleeping from '../image/Sleeping.jpg'
import Happy_Time from '../image/Happy_Time.jpg'
function About() {

  const navigate = useNavigate();

  useEffect(()=>{
    aos.init({
      duration: 1000,
      once: false
    })
  })
  return (
    <div>
      <section id="about" className="py-5">
{/* About Section first div doubt */}
        <div className='row container-fluid px-3 overflow-hidden g-5 my-5 align-items-center'>
          <h1  data-aos="fade-right" style={{ marginLeft: "50px", marginTop:"0px"}}>About Us</h1>
          <div className='col-lg-6 col-md-12'>
            <p data-aos="fade-left" className="lead">
              Welcome to Star Kids, where we nurture young minds and foster a love for learning. Our school is dedicated to providing a safe and stimulating environment for children to grow academically, socially, and emotionally. With a team of passionate educators and a comprehensive curriculum, we strive to empower our students to reach their full potential and become lifelong learners.
            </p>
            <button
        className="ViewMore"
        onClick={() => navigate("/admission")}
      >
        Admission
      </button>
          </div>
          <div className='col-lg-6 col-md-12'>
            <img
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
            className='About-image' src={Learn} alt="" />
          </div>
        </div>

        <div className='row g-4 my-4 align-items-center mx-0'>
          <h1 data-aos="fade-down" style={{ textAlign: "center" }}>Fun Learning</h1>
          <div className='col-lg-4 col-md-12'>
            <img data-aos="zoom-in" className='craft' src={CraftActivities} alt="" />
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Craft Activities</p>
            <p data-aos="fade-up" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>
          <div className='col-lg-4 col-md-12'>
            <img data-aos="zoom-in" className='games' src={Games} alt="" />
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Games</p>
            <p data-aos="fade-up" className='lead'>
              Games at our play school help children stay active, happy, and engaged while learning through play. Fun indoor and outdoor games improve physical strength, coordination, teamwork, and confidence. These activities also teach sharing, discipline, and social skills in an enjoyable environment.

            </p>
          </div>
          <div className='col-lg-4 col-md-12'>
            <img data-aos="zoom-in" className='quizzes' src={Quizzes} alt="" />
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Quizzes</p>
            <p data-aos="fade-up" className='lead'>Quizzes at our play school make learning fun and exciting for children. Simple and interactive quiz activities help improve memory, thinking skills, concentration, and confidence. They also encourage children to participate actively and learn new things in an enjoyable way.
            </p>
          </div>
        </div>

{/* <div>Daily Avtivity  1 </div> */}

         <div className='row g-4 my-4 align-items-center mx-0'>
          <h1 data-aos="fade-down" style={{ textAlign: "center" }}>Daily Activities</h1>
          <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Yoga} alt="" />
            </div>
            <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Yoga</p>
            <p data-aos="fade-left" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>
          </div>

{/* <div> 2 </div> */}
          <div className='row g-4 my-4 align-items-center mx-0'>

          <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Teaching</p>
            <p data-aos="fade-right" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>

          <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Teacher_Training} alt="" />
            </div>
            
          </div>

          {/* <div> 3 </div> */}
          <div className='row g-4 my-4 align-items-center mx-0'>

            <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Drawing} alt="" />
            </div>

          <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Drawing</p>
            <p data-aos="fade-left" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>
            
          </div>

          {/* <div> 4 </div> */}
          <div className='row g-4 my-4 align-items-center mx-0'>


          <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Playing</p>
            <p data-aos="fade-right" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>

          <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Playing} alt="" />
            </div>
            
          </div>

          {/* <div> 5 </div> */}
          <div className='row g-4 my-4 align-items-center mx-0'>

            <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Eating} alt="" />
            </div>

          <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Eating</p>
            <p data-aos="fade-left" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>
            
          </div>

          {/* <div> 6 </div> */}
          <div className='row g-4 my-4 align-items-center mx-0'>

            <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Sleeping</p>
            <p data-aos="fade-right" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>

            <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Sleeping} alt="" />
            </div>
            
          </div>

          {/* <div> 7 </div> */}
          <div className='row g-4 my-4 align-items-center mx-0'>

            <div className='col-lg-5 col-md-12'>
            <img data-aos="zoom-in" className='activity' src={Happy_Time} alt="" />
            </div>

          <div className='col-lg-6' col-md-12> 
            <p className='items-header' data-aos="zoom-in" style={{textAlign:"center", fontSize:"20px"}}>Happy Together</p>
            <p data-aos="fade-left" className='lead' >At our play school, craft activities give children a wonderful chance to learn through creativity and play. Kids enjoy making simple and beautiful art using colors, paper, and fun materials. These activities help develop hand coordination, patience, and self-expression in an enjoyable way.
            </p>
          </div>
            
          </div>

        
      </section>
      <Footer/>
    </div>
  )
}

export default About