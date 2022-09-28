import React from 'react';
import {Routes,Route } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import RegForm from '../components/RegForm';
import Stocks from '../components/Stocks';
import AddUser from '../screens/AddUser';
import AllUser from '../screens/AllUser';

const NavRouting = () => {
 
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route  path="/" element={ <RegForm></RegForm>}></Route>
        <Route  path="/stocks" element={<Stocks></Stocks>}></Route>
        <Route  path="/all" element={<AllUser></AllUser>}></Route>
        <Route  path="/add" element={ <AddUser></AddUser>}></Route>
      </Routes>
    </div>
  )
}

export default NavRouting