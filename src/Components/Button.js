import React from "react";

const Input = ({ name, convert }) => {
  return <button onClick={convert}>&#176;{name}</button>;
};

export default Input;
