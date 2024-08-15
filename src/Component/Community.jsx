import React from 'react'
import './Community.css'
import { Link } from 'react-router-dom'

const Community = () => {
  return (
    <div>
       
  <section className="review">
    <div className="section-container review-container">
      <span><i className="ri-double-quotes-r" /></span>
      <div className="review-content">
        <h4>MEMBER REVIEW</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatibus. Excepturi veritatis
          optio autem amet minus aspernatur voluptatibus sequi, illum voluptatum rerum, voluptatem provident
          laboriosam.
        </p>
        <div className="review-rating">
          <span><i className="ri-star-fill" /></span>
          <span><i className="ri-star-fill" /></span>
          <span><i className="ri-star-fill" /></span>
          <span><i className="ri-star-fill" /></span>
          <span><i className="ri-star-half-fill" /></span>
        </div>
        <div className="review-footer">
          <div className="review-member">
            <img src="assets/images/person.jpg" alt />
            <div className="review-member-details">
              <h4>Jane Cooper</h4>
              <p>Software Developer</p>
            </div>
          </div>
          <div className="review-nav">
            <span><i className="ri-arrow-left-line" /></span>
            <span><i className="ri-arrow-right-line" /></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer id="foot" className="section-container footer-conatiner">
    <span className="bg_blur" />
    <span className="bg_blur footer-blur" />
    <div className="footer-col">
      <div className="footer-logo"><img src="assets/images/mascot-transformed.png" alt /></div>
      <p>
        Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let's sweat,
        achieve, and conquer together!
      </p>
      <div className="footer-socials">
        <a href="#"><i className="ri-facebook-fill" /></a>
        <a href="#"><i className="ri-instagram-line" /></a>
        <a href="#"><i className="ri-twitter-x-line" /></a>
      </div>
    </div>
    <div className="footer-col">
      <h4>Company</h4>
      <a href="#">Business</a>
      <a href="#">Franchise</a>
      <a href="#">Partnership</a>
      <a href="#">Network</a>
    </div>
    <div className="footer-col">
      <h4>About Us</h4>
      <a href="#">Blogs</a>
      <a href="#">Security</a>
      <a href="#">Careers</a>
      <a href="#">Network</a>
    </div>
    <div className="footer-col">
      <h4>Contact</h4>
      <a href="#">Contact us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="bmi.html"></a>
      <Link to="/Bmi"  >
      BMI Calculator
          </Link>
    </div>
  </footer>
  <div className="footer-bar">
    Copyright © 2024 Kansha. All rights reserved.
  </div> 
    </div>
  )
}

export default Community