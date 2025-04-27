import React, { useState } from "react";

const Button = ({ name, convert, active }) => {
  return (
    <button onClick={convert} className={active ? "active btn" : "btn"}>
      &#176;{name}
    </button>
  );
};

export default Button;
