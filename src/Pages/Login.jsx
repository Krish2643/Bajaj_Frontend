import { useEffect, useState } from "react"
import "./Login.css"
import axios from "axios"
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from "react-router-dom"

const LoginForm = () => {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    password: "", 
    email: "" 
  })

  const [token, setToken] = useState();
  const [message, setMessage] = useState("");
//   const { login, user } = useAuth();
  const navigate = useNavigate();



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
    navigate('/'); 
};

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="subtitle">Enter your credentials to access your account</p>

        <div className="form-group">
          <label htmlFor="email">RM ID</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your RM ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      {message && <p>{message}</p>}
      </form>

    </div>
  )
}

export default LoginForm

