import React from "react";

const Button = ({name, length}) => {
  
  const onClick = () => {
    // Build a mem array to loop each member
    Array.from(Array(10).keys()).forEach((x, i) => console.log(`${x}`));
  };

  return <button onClick={onClick} className="btn">{name}</button>;
};

export default Button;
