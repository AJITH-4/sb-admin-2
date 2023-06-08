import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';

function AddUser({users,setUsers}) {
let navigate =useNavigate()
let params=useParams()
// console.log(params);

let [name,setName]= useState("")
let [email,setEmail]= useState("")
let [mobileno,setMobileno]= useState("")
let [dob,setDob]= useState("")

  let handleSubmit=()=>{
  let newUser ={name,email,mobileno,dob}
  let newArray =[...users]
  if(params.id!==undefined){
    newArray.splice(params.id,1,newUser)
  }else{
    newArray.push(newUser)
  }
  setUsers(newArray)
  navigate("/dashboard")
}
  useEffect(()=>{
    if(params.id !== undefined){
      setName(users[params.id].name)
      setEmail(users[params.id].email)
      setMobileno(users[params.id].mobileno)
      setDob(users[params.id].dob)
    }
  },[])
  return <>
    <div className='container-fluid'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>  Mobile No</Form.Label>
        <Form.Control type="text" placeholder="Enter mobileno" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Data Of Birth</Form.Label>
        <Form.Control type="date" placeholder="Enter dob" value={dob} onChange={(e)=>setDob(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>

    </Form>

    </div>
    </>
  
}
export default AddUser