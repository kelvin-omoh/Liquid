import React from 'react'
import { AppContext } from '../components/AppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  const {loggedIn} = useContext(AppContext)
  
  if (loggedIn) {
    return (
      <div>
        <h1>This is the Admin Page</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You're Not an Admin</h1>
        <p>Navigate to the Home Page Here: <Link to='/'><button style={{padding: '0.5em', backgroundColor: 'yellow'}}>Home Page</button></Link></p>
      </div>
    )
  }
}

export default Admin
