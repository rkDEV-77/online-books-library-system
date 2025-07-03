import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const Error = () => {

    const error = useRouteError()
    console.log(error);
    
  return (
    <div className=' h-screen text-center bg-gradient-to-r from-blue-500 to-purple-600 p-7'>
      <Link to={"/"} className='w-[20%] p-3 my-3 font-bold bg-cyan-300 hover:bg-cyan-500 rounded-md' >Back to Home</Link>
      <h1 className='text-2xl font-bold bg-red-500 p-3 mt-11'>OOOPPsss!!</h1>
      <h2 className='text-2xl font-bold bg-orange-400 p-7'>something went wrong</h2>
      <h3 className='text-2xl font-bold bg-cyan-500 p-7'>{error.status} {error.statusText}</h3>
      <h3  className='text-2xl font-bold bg-teal-500 p-7'>{error.data}</h3>
    </div>
  )
}

export default Error
