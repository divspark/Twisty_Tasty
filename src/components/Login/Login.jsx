import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./style.css";
import bgImage from "./bg7.jpg";
import { useLocation, useNavigate } from "react-router-dom";

function LoginSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignup = location.pathname === "/signup";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this formData to your backend
    console.log("Submitted data:", formData);
    navigate("/"); // redirect after login/signup
  };

  return (
    <div className="row vh-100 g-0">
      {/* Left side */}
      <div className="col-lg-6 position-relative d-none d-lg-block">
        <div
          className="bg-holder"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>

      {/* Right side */}
      <div className="col-lg-6">
        <div className="row align-items-center justify-content-center h-100 g-0 px-4 ps-sm-0">
          <div className="col col-sm-6 col-lg-7 col-xl-6">
            <div className="text-center mb-5">
              <h3 className="fw-bold">{isSignup ? "Sign Up" : "Log In"}</h3>
              <p className="text-secondary">
                {isSignup
                  ? "Create your new account"
                  : "Get access to your account"}
              </p>
            </div>

            {/* Social Login */}
            <button className="btn btn-lg btn-outline-secondary btn-outline-custom w-100 mb-3">
              <i className="bx bxl-google text-danger me-1 fs-6"></i>
              {isSignup ? "Signup with Google" : "Login with Google"}
            </button>
            <button className="btn btn-lg btn-outline-secondary btn-outline-custom w-100">
              <i className="bx bxl-facebook text-primary me-1 fs-6"></i>
              {isSignup ? "Signup with Facebook" : "Login with Facebook"}
            </button>

            {/* Divider */}
            <div className="position-relative">
              <hr className="text-secondary divider" />
              <div className="divider-content-center">or</div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bx bx-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-lg fs-6"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bx bx-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control form-control-lg fs-6"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bx bx-lock-alt"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg fs-6"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="text-center">
              <small>
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <span
                  className="fw-bold text-decoration-underline"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(isSignup ? "/login" : "/signup")}
                >
                  {isSignup ? "Log In" : "Sign Up"}
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
