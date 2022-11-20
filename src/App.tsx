import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import Input from './Input';
import { Util } from './Util';
import { Constants } from './Config';
import { Session } from './Session';

function App() {
  const [session, sessionChange] = useState(new Session());

  const submitAnswer = (word : string) => {
    session.submitAnswer(word);
    sessionChange(Util.deepCopy(session));
  }

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Table
       submitData={session.getSubmitData()}
       leftCount={session.getLeftCount()}/>
      <Input
       onSubmit={submitAnswer}/>
      <button
       onClick={() => {sessionChange(new Session())}}>
        재시작</button>
    </div>
  );
}

export default App;
