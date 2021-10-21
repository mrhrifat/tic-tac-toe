import React from "react";
import Square from "./Square";



const Board = props => {

    const makeSquare = i =>
        <Square
            sqrValue={props.sqrArr[i]}
            sqrHandleClick={() => props.onClick(i)}
        />


    return (
        <div className='board text-center'>
            <div>
                {makeSquare(0)}
                {makeSquare(1)}
                {makeSquare(2)}
            </div>
            <div>
                {makeSquare(3)}
                {makeSquare(4)}
                {makeSquare(5)}
            </div>
            <div>
                {makeSquare(6)}
                {makeSquare(7)}
                {makeSquare(8)}
            </div>
        </div>
    )
}
export default Board