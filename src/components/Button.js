import React from "react";

const Button = ({name, length}) => {
  
  function FechMethodAPI(){
    const url = `https://pokeapi.co/api/v2/pokemon`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(element => {console.log(element.name)});
    })
    .catch(err =>console.error(err));

  }

  const onClick = () => {
    
    // Build a mem array to loop each member
    //Array.from(Array(10).keys()).forEach((x, i) => console.log(`${x}`));

    FechMethodAPI();
  };

  return <button onClick={onClick} className="btn">{name}</button>;
};

export default Button;
