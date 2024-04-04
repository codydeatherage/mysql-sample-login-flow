import React from "react";
import LabeledInput from "./LabeledInput";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ login }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
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
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/login",
        data
      );
      if (response.data) {
        console.log(response.data);
        sessionStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/home");
      }
    } catch (e) {
      console.error(e);
    }
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
