import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  const options={
ADMIN:[
  {label:"Add Employee" ,to:'/dashboard/addemployee'},
  {label:"View Employee" ,to:'/dashboard/viewemployee'}
],
CRM:[
  {label:"Add Enquiry" ,to:'/dashboard/addenquiry'},
  {label:"View Enquiry" ,to:'/dashboard/viewenquiry'}
],
  }
  return (
    <div className='p-3'>
      
      <h1>SideNav</h1>
      <div style={{display:"flex", flexDirection:"column"}}  className='d-flex flex-column gap-2'>
      {
          options["CRM"].map((btn,index)=> <Link key={index} to={btn.to} className='btn btn-outline-primary'> {btn.label}</Link>)
        }
        </div>
      </div>
  )
}

export default SideNav