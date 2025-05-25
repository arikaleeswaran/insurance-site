import React from 'react'
import HInsurance from './HInsurance'

function HealthInsurance() {
  return (
    <>
    <div className='flex flex-col items-center'>
        <div className=' text-4xl font-bold py-5 '>Health Insurance</div>
        <p className='text-2xl'>Coverage for medical expenses and emergencies.</p>
        <div>
            <HInsurance/>
        </div>
      </div>
    </>
    
  )
}

export default HealthInsurance