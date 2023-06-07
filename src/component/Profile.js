import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Profile() {
  return <>
  <div><h1>Profile</h1>
  <h3>The Subcomponents are : </h3>
  <ul>
   <Link to="details"> <li>Profile details</li> </Link>
   <Link to="reset-password"> <li>Reset Password</li> </Link>
  </ul>
  <Outlet/>
  </div>
  </>
    
  
}

export default Profile