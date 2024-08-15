import React from 'react'
import '../Component/Header.css'

const Header = () => {
  return (
    <>
         <header id="home" className="section-container header-container">
        <div className="header_content">
          <span className="bg_blur" />
          <span className="bg_blur header_blur" />
          <h4>Best fitness in the town</h4>
          <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
          <p>
            Strength grows in the moments when you think you can't go on, but you keep going anyway. The gym is
            where perseverance turns into achievement, and sweat transforms into strength.
          </p>
          <div className="btn2">Learn More</div>
        </div>
        <div className="header_iamge">
          <img src="/assets/images/image.png" alt="Header" />
        </div>
      </header>
    </>
  )
}

export default Header