import { Util } from "./Util";

interface ModalProps {
  result: string;
  answer: string;
  tryCount: number;
  submitColorData: Array<Array<string>>;
  restartOnClick: Function;
}

function Modal({ result, answer, tryCount, submitColorData, restartOnClick }: ModalProps) {
  return (
    <div className="modal">
      <div className="modalBody">
        <div id="modalResult">
          {<h1 style={result === 'SUCCESS' ? {color: "blue"} : {color: "red"}}>{result}</h1>}
        </div>
        <div id="modalAnswer">
          <h2>The Answer is..</h2>
          <div>{answer}</div>
          <br></br>
        </div>
        <div id="modalTryCount">
          <h2>Your Try Count</h2>
          <div>{tryCount}</div>
          <br></br><br></br>
        </div>

        <button
         onClick={() => restartOnClick()}>
         재시작</button>
        <button
         onClick={() => Util.copyToClipboard(Util.makeColorText(submitColorData))}>
         결과 복사</button>
      </div>
    </div>
  );
}

export default Modal;