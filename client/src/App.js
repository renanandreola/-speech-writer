import React from 'react';
import './App.css';
import Card from './components/layout/Card';
import Board from './components/board/Board';
import ButtonIndirect from './components/board/ButtonIndirect';

function App () {
  
  return (
    <div className="app">
      <h1>Speech Writer</h1>

      <button className="record-btn" onClick={
        function name(params) {
          console.log('opa');
        }
      }>
        <span>Start recording</span>
      </button>

      {/* <ButtonIndirect></ButtonIndirect> */}

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