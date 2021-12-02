import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
          return {count:state.count + 1, showTextToggle: state.showTextToggle};
      case "ToggleShowText":
          return {count: state.count, showTextToggle: !state.showTextToggle};
      default:
        return state;
    }
  };


const RUseReduceHook = () => {

const [state, dispatch] = useReducer (reducer, {count:0, showTextToggle:""})

  return <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"Increment"}); dispatch({type:"ToggleShowText"})}} >Click here</button>
      {state.showTextToggle && <p>XXX</p>}
  </div>;
};

export default RUseReduceHook;
