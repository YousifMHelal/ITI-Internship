import React, { useState } from "react";

const Bouns = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(0);
  const [counter, setCounter] = useState(5);
  const [result, setResult] = useState("Guess your number");

  const handelGess = () => {
    if (counter <= 1) {
      setResult(`Game over, Refresh to try again | The numbre was: ${number}`);
    }
    else{
      if (number > guess) {
        setCounter(counter - 1);
        setResult("The number is bigger than your guess");
      }
      if (number < guess) {
        setCounter(counter - 1);
        setResult("The number is smaller than your guess");
      }
      if (number == guess) {
        setResult("You won, Refresh to try again");
      }
    }
    

    console.log(number);
  };
  return (
    <div className="bouns">
      <div className="container">
        <div className="box">
          <h2>Number guessing game</h2>
          <h4>You have {counter} tries remaining</h4>
          <p>{result}</p>
          <div>
            <p>guess the Number between 1 to 100</p>
            <input
              onChange={(e) => setGuess(e.target.value)}
              type="number"
              max={100}
              min={1}
              defaultValue={1}
            />
            {counter === 0 || result === "You won, Refresh to try again" ? (
              <button disabled onClick={handelGess}>
                guess
              </button>
            ) : (
              <button onClick={handelGess}>guess</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bouns;
