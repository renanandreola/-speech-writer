import React from 'react';
import './App.css';
import Card from './components/layout/Card';
import Board from './components/board/Board';

function App () {
  
  return (
    <div className="app">
      <h1>Speech Writer</h1>

      <button className="record-btn">
        <span>Start recording</span>
      </button>

      <div className="Cards">
        <Card title="Board" color="purple">
          <Board></Board>
        </Card>

        <Card title="Board" color="purple">
          <Board></Board>
        </Card>
      </div>
    </div>
  )
}

export default App;