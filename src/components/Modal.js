import React from 'react'

function event1(){
    console.log(`event1: ${Date.now()}) `);
}

const Modal = () => {
    return (
        <div className="modal">
            <button className="btn btn--alt" onClick={event1} >XXX</button>
        </div>
    )
}

export default Modal
