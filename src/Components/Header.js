import React from "react"
import { useNavigate } from "react-router-dom";

import "./Header.css"

export default function Header() {

  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');

  return (
    <div className="header-container" onClick={navigateToHome}>
      Consumer Finance Management System
    </div>
  )
}