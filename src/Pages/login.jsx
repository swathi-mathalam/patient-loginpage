import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import healthcareLogo from "../assets/Logo.png";

import { loginRequest } from "../redux/actions/authActions";
import "../styles/login.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    loading,
    error,
    isAuthenticated,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(
        6,
        "Password must be at least 6 characters"
      )
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(loginRequest(values));
  };

  return (
  <div className="login-page">
    <div className="overlay"></div>

    <div className="login-card">
      <div className="login-header">
       <img
      src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
      alt="Healthcare Logo"
      className="healthcare-logo"
    />
 <h1>Healthcare Portal</h1>

        <p>
          Welcome Back! Please login to
          continue
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={
          validationSchema
        }
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="login-form">
            {/* Email */}
            <div className="form-group">
              <label>Email</label>

              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input-field"
              />

              <ErrorMessage
                name="email"
                component="p"
                className="error-text"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">
                <Field
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter Password"
                  className="input-field"
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="p"
                className="error-text"
              />
            </div>

            {/* Remember Me */}
            <div className="login-options">
              <label>
                <Field
                  type="checkbox"
                  name="rememberMe"
                />
                Remember Me
              </label>

              <span className="forgot-password">
                Forgot Password?
              </span>
            </div>

            {/* Redux Error */}
            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="login-btn"
              disabled={
                !values.email ||
                !values.password ||
                loading
              }
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

};

export default Login;