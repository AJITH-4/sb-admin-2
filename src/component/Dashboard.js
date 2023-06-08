import React,{useState} from "react";
import { useNavigate} from "react-router-dom";
import Cart from "./Card"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Dashboard({users,setUsers}){
    let navigate =useNavigate()

    let [data,setdata] =useState ([
        {
            title:"EARNINIG(MONTHLY)",
            value:"$40000",
            color:"primary",
            icon:"fa-calendar",
            isProgress:true
        },
        {
            title:"EARNINIG(ANNUAL)",
            value:"$215000",
            color:"success",
            icon:"fa-dollar-sign",
            isProgress:true
        },
        {
            title:"TASK",
            value:"50",
            color:"info",
            icon:"fa-clipboard-list",
            isProgress:false
        },
        {
            title:"PENDING REQUEST",
            value:"18",
            color:"warning",
            icon:"fa-comments",
            isProgress:true
        },
    ])

    let handleDelete=((i)=>{
        let newArray =[...users]
        newArray.splice(i,1)
        setUsers(newArray)
    })
    return<>
    <div id="content-wrapper" className="d-flex flex-column">

      <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <div href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</div>
                </div>
                 <div className="row">
                 { data.map((e,i)=>{
                        return<Cart key={i}
                        data = {e}                
                        />
                        })
               
                     }
                </div>
                <div className="container">
                     <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>DOB</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((e,i)=>{
                            return<tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.dob}</td>
                                <td>
                                    <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                                    &nbsp;&nbsp;
                                    <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
                                </td>
                                
                            </tr>
                        })
                       }
                    </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</>
}

export default Dashboard