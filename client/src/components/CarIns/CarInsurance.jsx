import React from 'react'
import CInsurance from './CInsurance'

function CarInsurance() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='text-4xl font-bold py-5'>Car Insurances</div>
        <p className='text-2xl'>Protection for your vehicle and third-party liabilities.</p>
        <div>
            <CInsurance/>
        </div>
      </div>
       
    </>
  )
}

export default CarInsurance