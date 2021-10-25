import React from "react";

const Square = props => {
    return (
        <button
            className='board-btn'
            onClick={props.sqrHandleClick}
        >
            {props.sqrValue}
        </button>
    )
}
export default Square