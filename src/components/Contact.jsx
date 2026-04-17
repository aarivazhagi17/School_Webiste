import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import School from '../image/school.jpg'
import './Contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <>
    <div className="container my-5">
      <div className="row g-4 align-items-stretch shadow p-4 rounded border">

        {/* Left Side - Contact Form */}
        <div className="col-lg-6 col-md-12">
          <div className="h-100 d-flex flex-column justify-content-center">
            <h1 className="mb-5 fw-bold">Contact Us</h1>

            <input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
            /> <br />

            <input
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
            /> <br />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="form-control mb-3"
            ></textarea> <br />

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </div>
        </div>

        {/* Right Side - Map + Image */}
        <div className="col-lg-6 col-md-12">
          <div className="h-100 d-flex flex-column gap-3">

            {/* Image */}
            <img
              src={School}
              alt="Contact"
              className="img-fluid rounded shadow-sm"
              style={{ height: "440px", objectFit: "cover" }}
            />

            {/* Google Map */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991418954!2d-74.25987568721172!3d40.69767006359468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4c0e1c2d7%3A0x7a4d4f8e4e6d3d3!2sChennai!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin"
              className="w-100 rounded shadow-sm border"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default Contact;