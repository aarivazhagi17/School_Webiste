import React from 'react'
import Footer from './Footer'

function Gallery() {
  return (
    <div>
      <section id="gallery">
        <div className="container my-5">
          <h1 className="mb-5 fw-bold">Gallery</h1>
          <div className="row g-4">
            {/* Gallery Item 1 */}
            <div className="col-lg-4 col-md-6">
              <img
                src="https://source.unsplash.com/400x300/?school"
                alt="Gallery Item 1"
                className="img-fluid rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
            {/* Gallery Item 2 */}
            <div className="col-lg-4 col-md-6">
              <img
                src="https://source.unsplash.com/400x300/?students"
                alt="Gallery Item 2"
                className="img-fluid rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
            {/* Gallery Item 3 */}
            <div className="col-lg-4 col-md-6">
              <img
                src="https://source.unsplash.com/400x300/?
                classroom"
                alt="Gallery Item 3"
                className="img-fluid rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      
    </div>
  )
}

export default Gallery
