import React from "react";
import LabeledInput from "./LabeledInput";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleRegisterNav = () => {
    navigate("/register");
  };

  const onSubmitFail = () => {
    alert("Please complete the form");
  };

  const onSubmit = async (data) => {
    // 1.) Submit form to "/login" api endpoint
    // 2.) On successful login, save user info in sessionStorage
    // 3.) Navigate to home route ("/home")
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit, onSubmitFail)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              gap: "20px",
              width: "30vw",
              padding: "5px",
            }}
          >
            <h2>Login</h2>
            <LabeledInput id="email" register={register} required />
            <LabeledInput id="password" register={register} required />
            <div style={{ display: "flex" }}>
              <button type="submit" style={{ marginLeft: "auto" }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          onClick={handleRegisterNav}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Create Account
        </p>
      </div>
    </>
  );
};

export default LoginForm;
