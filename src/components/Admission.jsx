import React, {useEffect} from 'react'
import './Admission.css'
import Footer from './Footer'
import School3 from '../image/School3.jpg'
import aos from 'aos'
import 'aos/dist/aos.css'

import LKG from '../image/LKG.jpg'
import UKG from '../image/UKG.jpg'
import Pre_KG from '../image/Pre_KG.jpg'
function Admission() {

   useEffect(()=>{
      aos.init({
        duration: 1000,
        once: false
      })
    })


  return (
    <div>
      <section id="admission">
        <h1 style={{textAlign:"center", marginTop:"25px"}}>Admission</h1> <br />
        <div className='admission-container'>
          <div className='admission'>
            <h2 data-aos="zoom-in">UKG</h2>
            <img data-aos="zoom-in" className='LKG' src={UKG} alt="UKG Students" />
            <p data-aos="fade-down">Our UKG program builds upon the foundation laid in LKG, offering a more structured approach to learning while maintaining a play-based environment. Students engage in age-appropriate activities that promote critical thinking, problem-solving, and collaboration. Our dedicated teachers guide children as they develop essential academic skills and social confidence.</p>
           </div>
        <div className='admission'>
           <h2 data-aos="zoom-in">LKG</h2>
            <img data-aos="zoom-in" className='LKG' src={LKG} alt="LKG Students" />
            <p data-aos="fade-down">Our LKG program is designed to provide a nurturing and stimulating environment for young learners. We focus on fostering creativity, social skills, and early literacy through play-based learning activities. Our experienced teachers create a safe and engaging space where children can explore, learn, and develop a love for learning from an early age.</p>
           </div>
           <div className='admission'>
            <h2 data-aos="zoom-in">Pre-KG</h2>
            <img data-aos="zoom-in" className='LKG' src={Pre_KG} alt="" />
            <p data-aos="fade-down">In Pre-KG, students transition to a more formal educational setting while still enjoying a supportive and interactive learning experience. The curriculum emphasizes reading, writing, and mathematics, with hands-on activities that make learning enjoyable and meaningful. Our teachers foster a love for knowledge and encourage curiosity and creativity.</p>
           </div>
           </div>

 </section>
 <Footer/>
        </div>
  )
}

export default Admission
