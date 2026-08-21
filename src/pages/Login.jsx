import { useState } from "react";
import "../styles/form.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../services/productService";

export default function Login() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "emilys",
    password: "emilyspass",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

 const handleLogin = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!form.username) {
    newErrors.username = "Username is required";
  }

  if (!form.password) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }


  try {
    const response = await loginUser(
      form.username,
      form.password
    );

    

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    navigate("/");
  } catch (error) {
    setErrors({
      general: "Invalid username or password",
    });
  }
};

  return (
   <div className="login-page">

  <div className="login-card">

    <div className="login-image">
      <img src="/login-img.jpg" alt="Login" />
    </div>

    <form className="login-form" onSubmit={handleLogin}>
        <div className="welcome">
          <h1>welcome back</h1>
          <p>Login to continue your account</p>
        </div>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.username}</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        {errors.general && <span className="error">{errors.general}</span>}

    

        <button type="submit" className="submit">
          Sign In
        </button>

        <div className="divider">
          <span></span>
          <span>or</span>
          <span></span>
        </div>

        <button type="button" className="Gmail">
          <FcGoogle size={20} />
          Continue with Gmail
        </button>

   
      </form>

  </div>

</div>
  );
}
