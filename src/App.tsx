import React from 'react';
import './App.css';
import Table from './Table';

function App() {
  let []

  const submitAnswer = (word : string) => {

  };

  const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
    const wordInputElement = document.getElementById("wordInput") as HTMLInputElement;
    const wordInputValue = wordInputElement.value;

    if(e.key === 'Enter') {
      submitAnswer(wordInputValue);
    }
    else {
      wordInputElement.value = wordInputValue.replace(/[^A-Za-z]/ig, '')
                                              .substring(0, 5)
                                              .toUpperCase();
    }
  };

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Table/>
      <input
       id="wordInput"
       onInput={handleKeyPress}></input>
    </div>
  );
}

export default App;
