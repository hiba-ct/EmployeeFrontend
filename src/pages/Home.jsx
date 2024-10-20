import React from 'react'
import Employee from './Employee'

const Home = () => {
  return (
   /*  <div className='container my-5'>
        <div className='text-center mb-3 bg-dark'><h3 className='text-danger '>Employee Details</h3><Employee/></div>
       
    </div> */
    <div className='container my-5'>
  <div className='text-center mb-3 bg-danger p-5'>
    
    <Employee />
  </div>
</div>

  )
}

export default Home