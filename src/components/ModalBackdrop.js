import React from 'react'

const ModalBackdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onClick} />        
    )
}

export default ModalBackdrop
