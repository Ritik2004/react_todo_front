
import React, { useState,useContext } from 'react'
import { Context } from '../main'
const Loader = () => {

    const {isAuthenticated, loading, user} =  useContext(Context);
  return (
    <div>
      
    </div>
  )
}

export default Loader
