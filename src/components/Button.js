import React from "react";

const Button = ({name, lastname}) => {
  const onClick = () => {
    console.log(`onClick on ${name} and ${lastname}`)
  };

  return <button onClick={onClick} className="btn">{name}</button>;
};

export default Button;
