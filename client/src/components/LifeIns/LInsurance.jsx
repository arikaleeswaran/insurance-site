import React from 'react'
import { useNavigate } from 'react-router-dom';

function LInsurance() {
  const navigate = useNavigate();

    const handleProceed = (insuranceId)=>{
        navigate(`/user?insuranceId=${insuranceId}`);
    }

    const insurance = [
    {
      id: "L1",
      cover: 10000,
      coverTill:"60 Yrs",
      plan: "$20/month",
    },
    {
      id: "L2",
      cover: 25000,
      coverTill:"60 Yrs",
      plan: "$35/month",
    }
  ];

  return (
     <>
    {
      insurance.map((item)=>(
         <div className=' border-2 p-4 w-4xl my-2 rounded-2xl mt-3'>
        <div className='text-1xl font-medium'>Insurance Id. : {item.id}</div>
        <div>
            <h3 className='text-1xl font-medium'>Life Cover : {item.cover}</h3>
            <h3 className='text-1xl font-medium'>Cover Till: {item.coverTill} </h3>
            <h3 className=' text-1xl font-medium'>Price: {item.plan}</h3>
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

export default LInsurance