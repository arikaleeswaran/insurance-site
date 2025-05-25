import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';



function Caruser() {

    const [searchParams] = useSearchParams();
    const insuranceId = searchParams.get("insuranceId") || "";
    const navigate = useNavigate();


    const[data, setData] = useState({id:"",name:"",age:"",mail:"",phone:"",vehicleNo:"",brand:"",insurance_id:insuranceId});

    useEffect(()=>{
        const uniqId = 'USER-' + Math.floor(1000 + Math.random()*9000);
        setData((prev)=>({
            ...prev,id:uniqId
        }))
    },[])

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData((prev)=>({...prev,[name]:value}));
        console.log(data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/caruser',data)
        .then(res=>{
            console.log(res.data);
            alert(" Form submitted successfully!")
            navigate('/');
        })
        .catch(err =>{
            console.error(err);
            alert("Error submitting....")
            
        })

        console.log("Data: ",data);
        setData({
            name: "",
            age: "",
            mail: "",
            phone: "",
            insurance_id: insuranceId
        });
        
    }
    
  return (
    <div className=' flex flex-col items-center min-h-screen'>
        <div className='py-3 text-3xl font-medium'>User Details</div>
        <div className='mb-4 text-md text-gray-600'>
            <span className='font-medium'>User ID:</span> {data.id}
            <div className='py-1 font-medium text-blue-600'>Insurance ID: {data.insurance_id}</div>
        </div>

        <div className='w-full max-w-md flex justify-start mb-2'>
            <button
                onClick={() => navigate(-1)}
                className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600'
            >
            ← Back
            </button>
        </div>
        
        <form onSubmit={handleSubmit} className=' w-full max-w-md bg-white shadow-md border p-6 rounded-2xl'>
            <div className=' flex flex-col'>
                <label className='mb-1 text-gray-700'>Name: </label>
                <input type="text" required placeholder='Enter your name' onChange={handleChange} value={data.name} name='name' className='px-4 py-2 bg-cyan-100 focus:outline-none rounded-2xl' />
            </div>
            <div className=' flex flex-col'>
                < label className='mb-1 text-gray-700'>Age: </ label>
                <input type="number" required name="age" value={data.age} onChange={handleChange} className='px-4 py-2 bg-cyan-100 focus:outline-none rounded-2xl
                appearance-none 
              [&::-webkit-outer-spin-button]:appearance-none 
              [&::-webkit-inner-spin-button]:appearance-none'/>
            </div>
            <div className='flex flex-col'>
                < label className='mb-1 text-gray-700'>Mail Id: </ label> 
                <input type="mail" required  name='mail' value={data.mail} onChange={handleChange} className='px-4 py-2 bg-cyan-100 focus:outline-none rounded-2xl'/>
            </div>
            <div className=' flex flex-col'>
                < label className='mb-1 text-gray-700'>Phone No. : </ label >
                <input type="number" name="phone" value={data.phone} onChange={handleChange} className='px-4 py-2 bg-cyan-100 focus:outline-none rounded-2xl appearance-none 
              [&::-webkit-outer-spin-button]:appearance-none 
              [&::-webkit-inner-spin-button]:appearance-none' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='mb-1 text-gray-700'>Vehicle No. : </label>
                <input type="text" name='vehicleNo' onChange={handleChange} value={data.vehicleNo} className='px-4 py-2 bg-cyan-100 focus:outline-none rounded-2xl'/>
            </div>
            <div className=' flex flex-col'>
                <label htmlFor="" className='mb-1 text-gray-700'>Vehicle Brand: </label>
                <input type="text" name='brand' value={data.brand} onChange={handleChange} className='px-4 py-2 bg-cyan-100 focus:outline-none rounded-2xl' />
            </div>
            
            <button className='py-1 text-white text-lg cursor-pointer p-2 m-2 rounded-2xl bg-indigo-600 w-full'>Submit</button>
            
        </form>
    </div>
  )
}

export default Caruser

