import React from 'react'
import './Board.css';
// import Card from '../UI/Card';
import DarkBlue from './DarkBlue';


const Board = () =>{
  return(
    <div className="board">
        <DarkBlue Price="4M" CardName="Mayfair"></DarkBlue>
        <DarkBlue Price="3.5M" CardName="Park Lane"></DarkBlue>
    </div>

  ) 
}

export default Board;