import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/app.scss'
import { createContext } from 'react'

export const server = "https://nodejs-todo-backend.onrender.com/api/v1"

//with help of createContext we can use authentication 
//value anywhere inside the application
export const Context = createContext({isAuthenticated: false})

const AppWraper = () => {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({})

  return (
    <Context.Provider value={{
      isAuthenticated,
      setAuthenticated,
      loading, 
      setLoading,
      user, setUser
    }}
    >
    <App />
  </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppWraper />
  </React.StrictMode>,
)
