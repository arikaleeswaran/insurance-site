import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    
    const [insurance,setInsurance] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/all-insurance')
        .then(res => setInsurance(res.data))
        .catch(err => console.error("data fetch pannumpothu error uhhh...",err));
    },[])

    const getinsName =(insurance_id)=>{
        if(!insurance_id) return "Unknown Insurance";
        
        const prefix = insurance_id[0].toUpperCase();

        switch(prefix){
            case "C": return "Car Insurance";
            case "H": return "Health Insurance";
            case "L": return "Life Insurance";
            default: return "Unknown Insurance"
        }
    }
  return (
    <>
        <div className="flex flex-col items-center">
            <h2 className="text-black block text-4xl alig py-5">Choose your insurance type: </h2>
            <div className='flex flex-row justify-between'>
                <div onClick={()=> navigate('/health')} className='m-5 border-2 p-4 cursor-pointer'>
                    <h3>Health Insurance</h3>
                </div>
                <div onClick={()=> navigate('/car')} className='m-5 border-2 p-4 cursor-pointer'>
                    <h3>Car Insurance</h3>
                </div>
                <div onClick={()=> navigate('life')} className='m-5 border-2 p-4 cursor-pointer'>
                    <h3>Life Insurance</h3>
                </div>
            </div>
        </div>
        <div className=' flex justify-center w-full'>
        <div className='overflow-x-auto mt-4 w-full max-w-6xl'>
            <table className='min-w-full text-left border'>
            <thead className='bg-gray-200 text-md'>
                <tr>
                <th className='px-4 py-2'>Insurance ID</th>
                <th className='px-4 py-2'>Insurance Name</th>
                <th className='px-4 py-2'>User Name</th>
                <th className='px-4 py-2'>Age</th>
                <th className='px-4 py-2'>Email</th>
                <th className='px-4 py-2'>Phone</th>
                <th className='px-4 py-2'>Vehicle No </th>
                <th className='px-4 py-2'>Brand</th>
                </tr>
            </thead>
            <tbody>
                {insurance.map((item, index) => (
                <tr key={index} className='border-t'>
                
                    <td className='px-4 py-2'>{item.insurance_id}</td>
                    <td className='px-4 py-2'>{getinsName(item.insurance_id)}</td>
                    <td className='px-4 py-2'>{item.name}</td>
                    <td className='px-4 py-2'>{item.age}</td>
                    <td className='px-4 py-2'>{item.mail}</td>
                    <td className='px-4 py-2'>{item.phone}</td>
                    <td className='px-4 py-2'>{item.extra1}</td>
                    <td className='px-4 py-2'>{item.extra2}</td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
        </div>
        </>
  )
}

export default Home