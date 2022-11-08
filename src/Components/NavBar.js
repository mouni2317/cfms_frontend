import React from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

import "./NavBar.css"

export default function NavBar() {

  sessionStorage.setItem("username","sekhar");
  const navigate = useNavigate();
  const navigateToLogin = () => navigate('/');

  const logout = () =>{
    sessionStorage.clear();
    navigateToLogin();
  }

  const { pathname } = useLocation();

  if (pathname === '/') return null;
  

  return (
    <div className="navbar-container">
      <div className="options-container">
        <NavLink style={{textDecoration: 'none'}} to="/dashboard">
          <div className="option">Dashboard</div>
        </NavLink>
        <NavLink style={{textDecoration: 'none'}} to="/productList">
          <div className="option">Products</div>
        </NavLink>
      </div>
      <div className="right-containers">
        <div className="greeting-container">Welcome, {sessionStorage.getItem('username')}</div>
        <div className="logout-button" onClick={logout}>Logout</div>
      </div>
    </div>
  )
}