import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import Input from './Input';
import { Util } from './Util';
import { Constants } from './Config';
import { Session } from './Session';
import { wordDict } from './Dictionary';

interface ErrorMessage {
  isValid: boolean,
  errorMsg: string,
}

function App() {
  const [session, sessionChange] = useState(new Session());

  const submitAnswer = (word : string) => {
    const isValid = isValidWord(word);
    if(!isValid.isValid) {
      console.error(isValid.errorMsg);
      return;
    }

    const isAnswer = session.submitAnswer(word);
    sessionChange(Util.deepCopy(session));

    if(isAnswer) {
      alert('정답입니다');
    }
  }

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Table
       submitData={session.getSubmitData()}
       submitColorData={session.getSubmitColorData()}
       leftCount={session.getLeftCount()}/>
      <Input
       onSubmit={submitAnswer}/>
      <button
       onClick={() => sessionChange(new Session())}>
        재시작</button>
    </div>
  );
}

const isValidWord = (word: string): ErrorMessage => {
  if(word.length !== Constants.WORD_LEN) {
    return {
      isValid: false,
      errorMsg: `단어의 길이는 ${Constants.WORD_LEN}글자여야 합니다`
    };
  }
  if(!isInDictionary(word)) {
    return {
      isValid: false,
      errorMsg: '입력한 단어는 사전에 존재하는 단어여야 합니다'
    };
  }

  return {
    isValid: true,
    errorMsg: ''
  };
}

const isInDictionary = (word: string) => wordDict.includes(word);

export default App;
