import {  Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
// import api from "./api/api";

import './App.css'

function App() {


  return (
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route path="/"element={<Dashboard/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path="customers" element={<Customers/>}/>
      </Route>
      
    
    </Routes>
   
    
  
   
  )
}

export default App
