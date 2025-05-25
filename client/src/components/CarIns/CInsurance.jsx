import React from 'react'
import { useNavigate } from 'react-router-dom'

function CInsurance() {

    const navigate = useNavigate();

    const handleProceed = (insuranceId)=>{
        navigate(`/caruser?insuranceId=${insuranceId}`);
    }
    
  const insurance = [
    {
      id: "C1",
      coverAmount: 10000,
      plan: "$20/month",
    },
    {
      id: "C2",
      coverAmount: 25000,
      plan: "$35/month",
    }
  ];

  return (
    <>
    {
      insurance.map((item)=>(
         <div className=' border-2 p-4 w-4xl my-2 rounded-2xl mt-3'>
        <div className='text-1xl font-medium'>Insurance No. : {item.id}</div>
        <div>
            <h3 className='text-1xl font-medium'>Cover Amount: {item.coverAmount}</h3>
            <h3 className=' text-1xl font-medium'>Plan: {item.plan}</h3>
        </div>
        <div className='flex justify-end'>
            <button onClick={()=> handleProceed(item.id)} className=' border-2 rounded-2xl p-2 cursor-pointer '>Proceed</button>
        </div>
         </div>
      ))
    }
    </>    
  )
}

export default CInsurance