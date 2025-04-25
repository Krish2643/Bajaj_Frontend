import "./Navbar.css";
import logo from "../../assets/Images/bajaj-logo.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const navigate = useNavigate();
  const { logout } = useAuth();


  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleLogout = () => {
     navigate("/login");
     logout();
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink
          to={"/"}
          className="logo-container"
          onClick={() => handleTabChange("home")}
        >
          <img src={logo} alt="" />
        </NavLink>

        <div className="nav-right">
          {currentTab === "home" ? (
            <NavLink to="/ask_ai">
              <button
                className="ask-ai-button"
                onClick={() => handleTabChange("ask_ai")}
              >
                <span className="sparkle-icon">✨</span> Ask AI
              </button>
            </NavLink>
          ) : (
            <NavLink to="/">
              <button
                className="dashboard"
                onClick={() => handleTabChange("home")}
              >
                Dashboard
              </button>
            </NavLink>
          )}


         
         <button className="logout-btn" 
         onClick={handleLogout}
         >
            Logout
          </button>
         

          <div className="user-info">
            <div className="user-text">
              <h3 className="user-greeting">Hi Diya!</h3>
              <p className="branch-name">Branch Name</p>
            </div>
            <div className="avatar-container">
              <img
                src="/user-avatar.png"
                alt="User Avatar"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
