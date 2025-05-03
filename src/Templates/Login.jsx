import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

function Login() {


const{register,handleSubmit}=useForm();
  const navigate=useNavigate();

  function onLogin(data)

{
  alert("Logged in...!!");
  console.log(data)
  navigate('/dashboard');
}  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onLogin)}>
    Username:<input type='text' {...register('username')}></input><br></br>
    Password:<input type='password' {...register('password')}></input><br></br>
    <button type='submit'>Login</button>
    </form>
    </div>
    
  )
}

export default Login