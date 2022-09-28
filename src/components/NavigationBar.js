import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center", padding:"20px" }}>
        <NavLink to="/" ></NavLink>
        <NavLink to="/stocks" style={{marginRight:"10px",fontSize:"18px",color:"black"}}>Stocks</NavLink>
        {/* <NavLink to="/"> React JS Crud</NavLink> */}
        <NavLink to="all" > All Users</NavLink>
        <NavLink to="add"> Add Users</NavLink>
    </div>
  )
}

export default NavigationBar