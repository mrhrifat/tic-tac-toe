import React from "react";

const Square = props => {
    return (
        <button
            onClick={props.sqrHandleClick}
        >
            {props.sqrValue}
        </button>
    )
}
export default Square