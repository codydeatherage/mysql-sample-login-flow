import React from "react";

const Home = () => {
  const savedUser = sessionStorage.getItem("userInfo");
  const userInfo = savedUser && JSON.parse(savedUser);
  return <h1>{`Logged in as ${userInfo?.username}`}</h1>;
};

export default Home;
