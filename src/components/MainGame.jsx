import React from "react";
import Board from "./sub-components/Board";
// import '../styles/style.main.css'



// Main Game
class MainGame extends React.Component {

    state = {
        history: [{ sqrArray: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true
    }

    calculateWinner(sqrArray) {
        const possible = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < possible.length; i++) {
            let [a, b, c] = possible[i]
            // console.log(i)
            if (sqrArray[a] && sqrArray[a] === sqrArray[b] && sqrArray[a] === sqrArray[c]) {
                return sqrArray[a]
            }
        }
        return null
    }

    handleClick = i => {
        // console.log(i)
        // console.log(this.state.history[0])

        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const sqrArray = current.sqrArray.slice()

        if (this.calculateWinner(sqrArray) || sqrArray[i]) {
            return
        } else {
            sqrArray[i] = this.state.xIsNext ? 'X' : 'O'
        }

        this.setState({
            history: history.concat([{ sqrArray }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })

        // console.log(history)
        // console.log(current)
        // console.log(sqrArray)
    }

    jumpTo = step => {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = this.calculateWinner(current.sqrArray)
        // console.log(winner)

        const moves = history.map((_, move) => {
            const description = move ? 'Go to move # ' + move : 'Go to game start'
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{description}</button>
                </li>
            )
        })

        let status = ''
        if (winner) {
            status = 'Winner is ' + winner
        } else {
            status = "Next player is " + (this.state.xIsNext ? 'X' : 'O')
        }

        return (
            <div
                className='container py-3'
                style={{
                    backgroundColor: '#2d3e50'
                }}
            >
                <h3
                    style={{
                        textAlign: 'center',
                        color: '#fff'
                    }}
                    className='py-2'
                >Tic Tac Toe</h3>

                <div className="row">
                    <div className="col-md-6 board">
                        <Board sqrArray={current.sqrArray} onClick={this.handleClick} />
                    </div>
                    <div className="col-md-6 info">

                        <div
                            className="text-light"
                        >
                            {status}
                        </div>

                        <ol>
                            {moves}
                        </ol>

                    </div>
                </div>

            </div >
        )
    }
}
export default MainGame