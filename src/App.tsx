import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import Input from './Input';
import { Util } from './Util';
import { Constants } from './Config';
import { Session } from './Session';
import { wordDict } from './Dictionary';
import { Validator } from './Validator';

function App() {
  const [session, sessionChange] = useState(new Session());

  const submitAnswer = (word : string) => {
    const isValid = Validator.isValidWord(word);
    if(!isValid.isValid) {
      console.error(isValid.errorMsg);
      return;
    }

    const isAnswer = session.submitAnswer(word);
    sessionChange(Util.copySession(session));

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


export default App;
