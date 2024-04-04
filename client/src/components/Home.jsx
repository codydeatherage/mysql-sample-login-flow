import React from "react";

const Home = () => {
  //retrieve userInfo from sessionStorage item created on successful login in Login.jsx
  const savedUser = sessionStorage.getItem("userInfo");
  const userInfo = savedUser && JSON.parse(savedUser);

  return <h1>{`Logged in as ${userInfo?.username}`}</h1>;
};

export default Home;
