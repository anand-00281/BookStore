import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
  

const Login = () => {

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
    <div>
   
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form  method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Login</h3>
          <div className='mt-5'>
             <span className='block'>Email</span>
             <input type="email" placeholder='Enter your email' className='p-1 outline-none rounded-md border'
              {...register("email", { required: true })} />
             <br />
             {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
          </div>
          <div className='mt-5'>
             <span className='block'>Password</span>
             <input type="password" placeholder='Enter your password'
              className='p-1 outline-none rounded-md border' 
              {...register("password", { required: true })}/>
              <br />
              {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
          </div>
          <div className='mt-5 justify-around flex' >
             <form onSubmit={handleSubmit(onSubmit)} method="dailog">
             <button  className='bg-pink-500 px-5 py-1 rounded-lg text-white '>Login</button>
             </form>
             <p className='pl'>Not registered? <Link to="/Signup" className='text-blue-500 underline  cursor-pointer'> Signup</Link></p>
            
          </div>
      </div>
    </dialog></div>
  )
}

export default Login