import React, {useState, useEffect, useRef} from 'react';
export default function useGame(){
    const START_TIME = 15
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(START_TIME);
  const [words, setWords] = useState("");
  const [startGame, setStartGame] = useState(false);
  const textAreaRef = useRef(null);
  const handleChange = (event)=> {
    const {value} = event.target
    setWords(value)
  }
  console.log(textAreaRef)

  function start(){
      setTimeRemaining(START_TIME)
      setStartGame(true)
      setWords("")
  }

  function calculateWords(x){
    let wordsArray = x.trim().split(" ");
    let finalCount = wordsArray.filter(word=>word!="").length;
    setCount(finalCount);
  }

  function endGame(){
    setStartGame(false);
    calculateWords(words);
  }
  useEffect(()=> {
    if(!startGame) {
      return
    }
    if(timeRemaining>0){
      setTimeout(()=>{
        setTimeRemaining(prevTime=>prevTime-1)
      },1000)
  } else {
    endGame()
  }

  }, [timeRemaining, startGame])

  useEffect(()=> {
      if(startGame){
        textAreaRef.current.focus()
      }
  }, [startGame])

  return {timeRemaining, textAreaRef, words, startGame, handleChange, start, count}

}
