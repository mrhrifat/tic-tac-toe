import React from "react";
import Square from "./Square";



class Board extends React.Component {

    renderSquare = i =>
        <Square
            sqrValue={this.props.sqrArray[i]}
            sqrHandleClick={() => this.props.onClick(i)}
        />

    render() {
        return (
            <div className='text-center'>
                
                <div 
                className='d-flex align-items-center justify-content-center'
                >
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div 
                className='d-flex align-items-center justify-content-center'
                >
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div 
                className='d-flex align-items-center justify-content-center'
                >
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
export default Board