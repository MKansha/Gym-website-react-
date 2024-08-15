import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='head'>
      <section id="about" className="section-container join-container">
        <h2 className="section-header">WHY JOIN US?</h2>
        <p className="section-subhead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam consectetur accusamus pariatur ab consequatur numquam quae veniam, aut voluptates.
        </p>
        <div className="join-image">
          <img src="/assets/images/g.jpg" alt="" />
          <div className="join-grid">
            <div className="join-card">
              <span><i className="ri-user-star-fill" /></span>
              <div className="join-card-content">
                <h4>Personal Trainer</h4>
                <p>Unlock your potential with our expert personal Trainer</p>
              </div>
            </div>
            <div className="join-card">
              <span><i className="ri-vidicon-fill" /></span>
              <div className="join-card-content">
                <h4>Practice Sessions</h4>
                <p>Elevate your fitness with practice sessions</p>
              </div>
            </div>
            <div className="join-card">
              <span><i className="ri-building-line" /></span>
              <div className="join-card-content">
                <h4>Good Management</h4>
                <p>Supportive management, for your fitness success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
