import React from 'react'

const Header = () => {
  return (
    <section className='container p-2'>
      <div className='row'>
       <div className='col-lg-6 col-md-12   col-md:m-auto'> 
          <img src="https://www.citocomputer.com/assets/image-BACFBLrz.png" alt="" height={120} />
        
       </div>
       <div className='col-lg-6 align-content-center'> 
         <ul className='d-flex gap-5' style={{listStyleType:"none"}}>
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