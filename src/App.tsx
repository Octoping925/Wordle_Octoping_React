import { useState } from 'react';
import './App.css';
import Table from './Table';
import Input from './Input';
import { Util } from './Util';
import { Session } from './Session';
import { Validator } from './Validator';
import Modal from './Modal';

function App() {
  const [session, sessionChange] = useState(new Session(Util.pickRandomAnswer()));

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

  const restartSession = () => sessionChange(new Session(Util.pickRandomAnswer()));

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
       onClick={restartSession}>
        재시작</button>
      {session.isWin() !== 'PLAYING' &&
      <Modal
       result={session.isWin()}
       answer={session.getAnswer()}
       tryCount={session.getSubmitData().length}
       submitColorData={session.getSubmitColorData()}
       restartOnClick={restartSession} />}
    </div>
  );
}


export default App;
