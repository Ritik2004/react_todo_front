import Loader from "../components/Loader";
import { Context } from '../main'
import React, { useState,useContext } from 'react'

const Profile = () => {

  const {isAuthenticated, loading, user} =  useContext(Context);

  return (
   loading ? <Loader/>:(
    <div>
    <h1>
      {user?.name}
    </h1>
    <p>{user?.email}</p>
    </div>
   )
  )
}

export default Profile
