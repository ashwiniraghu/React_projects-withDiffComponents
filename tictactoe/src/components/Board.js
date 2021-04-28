import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";
import {WinningLogic} from "./WinningLogic";

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    let status;
    const logic =  WinningLogic(squares);
    const winner = logic.winner;
   const higlightWinner=logic.line;
  // console.log(higlightWinner);

    if(winner)
    {
        status = `Winner is ${winner}`;
        
    }else if (logic.isDraw){
        status=`Match is Draw`;
    }else{
        status = `Next player ${isXNext ? 'X' : 'O'}`;
    }
    const onClick = (i) => {
        const nextSquare = squares.slice();
        console.log(winner)
        console.log(nextSquare[i]);
        
        if(winner && winner === nextSquare[i]){
            return;
        }
        nextSquare[i] = isXNext ? 'X' : 'O';
        setSquares(nextSquare)
        setIsXNext(!isXNext);
    }

    const renderSquare = (i) => {
        //console.log(i);
        return (
            <Square
                onClick={() => onClick(i)} value={squares[i]} higlightedLines={higlightWinner && higlightWinner.includes(i)}/>
        );
    }

    return (
        <div className="gamecontainer">
            <div className="status">{status}</div>
            <div className="boardrow">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="boardrow">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="boardrow">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

        </div>
    );
}

export default Board;