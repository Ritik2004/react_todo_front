import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main'
import toast from "react-hot-toast"
import axios from "axios"
import {server} from "../main"
const Header = () => {
 const {isAuthenticated, setAuthenticated,loading, setLoading} =  useContext(Context);

 const logoutHandler = async (e) => {
  setLoading(true)
  try{
    const {data} = await axios.get(`${server}/users/logout`,
    
    {
      withCredentials: true,
    }
    );
     toast.success("Loagged Out Successfully")  
     setAuthenticated(false)
     setLoading(false)
  }
  catch(error){
         toast.error(error.response.data.message);
         setAuthenticated(true);
         setLoading(false)
  }
}



  return (
    <div>
      <nav className='header'>
        <div>
            <h2>Todo App.</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to="/profile">Profile</Link>
            {
              isAuthenticated ?
               <button 
               disabled = {loading}
              onClick={logoutHandler} className='btn'>
              Logout
              </button> :
              <Link to={"/login"}>Login</Link>
            }
        </article>
      </nav>
    </div>
  )
}

export default Header
