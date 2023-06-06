import React from "react";
import Cart from "./Card"
function Dashboard(){
    let data = [
        {
            title:"EARNINIG(MONTHLY)",
            value:"$40000",
            color:"primary",
            icon:"fa-calendar",
            isProgress:true
        },
        {
            title:"EARNINIG(ANNUAL)",
            value:"$21500",
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
    ]
    return<>
    <div id="content-wrapper" className="d-flex flex-column">

    <div id="content">
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
               { data.map((e,i)=>{
                    return<Cart key={i}
                   data = {e}                
                    />
               })
               
               }
            </div>
        </div>
    </div>  

</div>
    </>
}

export default Dashboard