import React from 'react'
import '../Component/Explore_container.css'

const Explore_conatiner = () => {
  return (
    <>
          <section id="pg" className="section-container explore_conatiner">
    <div className="explore_header">
      <h2 className="section-header">EXPLORE OUR PROGRAM</h2>
      <div className="explore_nav">
        <span><i className="ri-arrow-left-line" /></span>
        <span><i className="ri-arrow-right-line" /></span>
      </div>
      <div className="explore_grid">
        <div className="container">
          <div className="card">
            <img src="assets/images/strength.jpg" className="card-image" alt />
            <div className="card-body">
              <div className="sub">
                <h2>Strength</h2>
              </div>
              <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorem!</p>
              </div>
              <button className="btn1">Join Now</button>
            </div>
          </div>
          <div className="card">
            <img src="assets/images/heart1.jpg" className="card-image" alt />
            <div className="card-body">
              <div className="sub">
                <h2>Physical Fitness</h2>
              </div>
              <div className="info">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, explicabo?</p>
              </div>
              <button className="btn1">Join Now</button>
            </div>
          </div>
          <div className="card">
            <img  src="assets/images/image.png" className="card-image" alt />
            <div className="card-body">
              <div className="sub">
                <h2>Fat Lose</h2>
              </div>
              <div className="info">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, error.</p>
              </div>
              <button className="btn1">Join Now</button>
            </div>
          </div>
          <div className="card">
            <img src="assets/images/weight-gain.jpg" className="card-image" alt />
            <div className="card-body">
              <div className="sub">
                <h2>Weight Gain</h2>
              </div>
              <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, soluta.</p>
              </div>
              <button className="btn1">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Explore_conatiner