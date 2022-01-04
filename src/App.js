import React from 'react';
import {Route,Routes, BrowserRouter, Link} from "react-router-dom"
import Home from "./Components/Home"
import {Orders} from "./Components/Orders"
import {Users} from "./Components/Users"
import {Login} from "./Components/Login"
import {RegistrationUser} from "./Components/Registration/RegistrationUser"
import {RegistrationPerformer} from "./Components/Registration/RegistrationPerformer"


function App() {
    
    return(
        <BrowserRouter>
            <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/RegistrationUser">Register as а costumer</Link>
            </li>
            <li>
              <Link to="/RegistrationPerformer">Register as a performer</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Orders">Orders</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/RegistrationUser" element={<RegistrationUser />}>
          </Route>
          <Route path="/RegistrationPerformer" element={<RegistrationPerformer />}>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route> 
          <Route path="/Orders" element={<Orders />}>
          </Route> 
          <Route path="/Users" element={<Users />}>
          </Route> 
        </Routes>
      </div>
        </BrowserRouter>
    )
}
export default App;