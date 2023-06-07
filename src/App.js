import Sidebar from "./component/Sidebar"
import Dashboard from "./component/Dashboard"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import AddUser from "./component/AddUser"
import Profile from "./component/Profile"
import PendingRequest from "./component/PendingRequest"
import Task from "./component/Task"
import Profiledetails from "./component/Profiledetails"
import Resetpassword from "./component/Resetpassword"


function App(){
  return<>
   <BrowserRouter>
    <div id="wrapper">
     <Sidebar/>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/add-user" element={<AddUser/>}/>
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