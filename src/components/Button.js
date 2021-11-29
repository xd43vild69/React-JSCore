import React from "react";

const Button = () => {
  const onClick = () => {
    console.log("onClick")
  };

  return <button onClick={onClick} className="btn">Btn1</button>;
};

export default Button;
