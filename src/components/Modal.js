import React from 'react'
import Arrays from '../baselib/Arrays';

function event1(){
    console.log(`event1: ${Date.now()}) `);
}

const Modal = (props) => {
    const xxx = {name:"n1", age:"age1"}

    function event2(){
        console.log([xxx]);
    }

    return (
        <div className="modal">
            <button className="btn btn--alt" onClick={event2} >Confirm</button>
            <button className="btn btn--alt" onClick={props.onClick} >Cancel</button>
            <Arrays></Arrays>
        </div>
    )
}

export default Modal
