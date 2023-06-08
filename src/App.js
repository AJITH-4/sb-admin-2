import Sidebar from "./component/Sidebar"
import Dashboard from "./component/Dashboard"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import AddUser from "./component/AddUser"
import Profile from "./component/Profile"
import PendingRequest from "./component/PendingRequest"
import Task from "./component/Task"
import Profiledetails from "./component/Profiledetails"
import Resetpassword from "./component/Resetpassword"
import { useState } from "react"

function App(){
let [users,setUsers]=useState([
 { name:"Anoop",
   email:"anoop12@gmail.com",
   mobileno:9876543210,
   dob:"1995-05-23"
},
{ name:"Ajith",
   email:"ajith12@gmail.com",
   mobileno:7896543210,
   dob:"1997-07-20"
},
{ name:"naveen",
   email:"naveen34@gmail.com",
   mobileno:8976443210,
   dob:"1999-03-27"
},
{ name:"gokul",
   email:"gokul322@gmail.com",
   mobileno:6386543210,
   dob:"2000-01-13"
}
])
return<>
   <BrowserRouter>
    <div id="wrapper">
     <Sidebar/>
     <Routes>
      <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} />}/>
      <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />}/>
      <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers} />}/>
      <Route path="/profile" element={<Profile/>}>
        <Route path="details" element={<Profiledetails/>}/>
        <Route path="reset-password" element={<Resetpassword/>}/>
        </Route>
      <Route path="/pending-request" element={<PendingRequest/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/*" element={<Navigate to="/dashboard"/>}/>
     </Routes>
    
  </div>
  </BrowserRouter>
  </>
}
export default App;