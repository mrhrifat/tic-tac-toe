import React from "react";
import Board from "./sub-components/Board";
import '../styles/style.main.css'

class MainGame extends React.Component {

    state = {
        history: [{ sqrArr: Array(9).fill(null) }],
        stepNumber: 0,
        xInNext: true
    }

    handleClick = i => {
        const history2 = this.state.history.slice(0, this.state.stepNumber + 1)
        console.log(history2)
        const current = history2[history2.length - 1]
        console.log(current)
        const square = current.sqrArr.slice()
        console.log(square)

        // if (calculateWinner(square) || square(i)) {
        //     return
        // } else {
        //     square[i] = this.state.xInNext ? 'X' : 'O'
        //     this.setState({
        //         history:history.concat([{square}]),
        //         stepNumber:history.length,
        //         xInNext:!this.state.xInNext
        //     })
        // }
    }

    render() {
        return (
            <div className='container'>
                <h3>Tic Tac Toe</h3>
                <Board sqrArr={this.state.history[0]} onClick={this.handleClick} />
            </div>
        )
    }
}
export default MainGame