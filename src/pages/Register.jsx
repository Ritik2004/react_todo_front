import React, { useState,useContext } from 'react'
import axios from "axios"
import {server} from "../main"
import toast from "react-hot-toast"
import { Context } from '../main'
import { Link, Navigate } from 'react-router-dom'
const Register = () => {


  const [name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("")

  const {isAuthenticated, setAuthenticated,loading, setLoading} =  useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      console.log(name, email, password)
      const {data} = await axios.post(`${server}/users/new`,{
        name, email, password
      },{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials: true,
      }
      );
       toast.success(data.message)  
       setAuthenticated(true)
       setLoading(false)
    }
    catch(error){
      toast.error(error.response.data.message);
           setAuthenticated(false);
           setLoading(false)
    }
  }
  if(isAuthenticated) return <Navigate to={"/"}/>
  return (
    <div>
        <div className='login'>
      <section>
        <form onSubmit={submitHandler}>
          <input  
             value={name}
             onChange={(e)=>setName(e.target.value)}
             type='text'
             placeholder='Name' 
             required
             />
          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type='email'
           placeholder='Email' 
           required

           />
          <input value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type='password' 
          placeholder='Password'
           required

           />
          <button disbaled={loading} type='submit'>Sign Up</button>
          <h4>Or</h4>
          <Link to="/register">Log In</Link>
        </form>
      </section>
    </div>
    </div>
  )
}

export default Register
