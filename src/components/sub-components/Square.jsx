import React from "react";

const Square = props => {
    return (
        <button
            className='board-btn'
            onClick={props.sqrHandleClick}
            style={{
                width: '50px',
                height: '50px',
                padding: '50px',
                border: '1px solid #2d3e50',
                backgroundColor: '#34495e',
            }}
        >
            {props.sqrValue}
        </button >
    )
}
export default Square