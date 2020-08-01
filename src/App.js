import React from 'react';
import './App.css';
import useGame from './useGame';


function App() {
  const {timeRemaining, textAreaRef, words, startGame, handleChange, start, count} = useGame()
  return (
      <div className="App">
      <h1>How fast can you type?</h1>
      <h2>Time remaining: {timeRemaining}</h2>
      <textarea
      ref={textAreaRef}
      name="textarea"
      value={words}
      disabled={!startGame}
      onChange={handleChange}/>
      <br/>
  <button onClick={start} disabled={startGame}>{startGame? "Running": "Start!"}</button>
  <h2>{count==0? "Word count: 0": `You typed ${count} words in 15 seconds!`}</h2>
      </div>
    
  )
}


export default App;
