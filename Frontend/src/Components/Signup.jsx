import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-auto max-w-md w-full border rounded-lg bg-white p-4 relative modal-box">
        <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
          {/* Close button */}
          <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </Link>
        
        <h3 className="font-bold text-2xl text-center">Signup</h3>
        <div className='mt-5'>
          <span className='block'>Full name</span>
          <input 
            type="text" 
            placeholder='Enter your full name' 
            className='p-2 outline-none rounded-md border w-full' 
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
        </div>
        <div className='mt-5'>
          <span className='block'>Email</span>
          <input 
            type="email" 
            placeholder='Enter your email' 
            className='p-2 outline-none rounded-md border w-full' 
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
        </div>
        <div className='mt-5'>
          <span className='block'>Password</span>
          <input 
            type="password" 
            placeholder='Enter your password' 
            className='p-2 outline-none rounded-md border w-full' 
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
        </div>
        <div className='mt-5 flex flex-col sm:flex-row sm:justify-between items-center'>
            <button className='bg-pink-500 px-5 py-2 rounded-lg text-white'>
              Sign in
            </button>
          <p className='mt-3 sm:mt-0'>
            Already have an account? <button className='text-blue-500 underline' onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
          </p>
          <Login/>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
