import React from "react";
import Button from 'react-bootstrap/Button'

const ButtonCmp = ({name, length}) => {
  
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
  
  return <Button onClick={onClick}>{name}</Button>;
};

export default ButtonCmp;
