import React from 'react'

const Header = () => {
  return (
    <section className='container p-2'>
  <div className='row align-items-center'>
    
    {/* Left side: Image */}
    <div className='col-lg-6 col-md-12 d-flex justify-content-center justify-content-sm-center justify-content-md-start'>
      <img 
        src="https://www.citocomputer.com/assets/image-BACFBLrz.png" 
        alt="" 
        height={120} 
      />
    </div>

    {/* Right Side: Menu */}
    <div className='col-lg-6 col-sm-12 p-5'>
      <ul className='d-flex gap-5 justify-content-center m-0' style={{ listStyleType: "none" }}>
        <li>Home</li>
        <li>Courses</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>

  </div>
</section>


  )
}

export default Header