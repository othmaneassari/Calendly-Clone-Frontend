import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const AuthLogin = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  handleLogin();

  return <>Login Page</>;
};

export default AuthLogin;
