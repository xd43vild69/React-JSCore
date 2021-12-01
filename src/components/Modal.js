import React from 'react'

function ExternalFn(){
    console.log(`event1: ${Date.now()}) `);
}

const Modal = (props) => {
    const todoCofirmation = {name:"server1", run1:"runProcess"}

    function runServerConfirm(){
        console.log([todoCofirmation]);
        ExternalFn();
    }

    return (
        <div className="modal">
            <button className="btn btn--alt" onClick={runServerConfirm} >Confirm</button>
            <button className="btn btn--alt" onClick={props.onClick} >Cancel</button>
            <progress></progress>
        </div>
    )
}

export default Modal
