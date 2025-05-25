import React from 'react'
import LInsurance from './LInsurance'

function LifeInsurance() {
  return (
   <>
   <div className='flex flex-col items-center'>
    <div className=' text-4xl font-bold py-5 '>Life Insurance</div>
    <p className=' text-2xl'>Financial security for your loved ones.</p>
    <div>
        <LInsurance/>
    </div>
   </div>
   
   </>
  )
}

export default LifeInsurance